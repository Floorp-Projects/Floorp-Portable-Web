import { hookProductionMiddlewares } from "../api/index.mjs";
import express from "express";
import { parseArgs } from "util";
import fs from "fs";
import path from "path";

const cli_options = {
  port: {
    type: "string",
    multiple: false,
  },
  host: {
    type: "string",
    multiple: false,
  },
}

const args = process.argv.slice(2);
const parsedArgs = parseArgs({ options: cli_options, args });

const app = express();

hookProductionMiddlewares(app);
app.use(express.static("build"));
app.all("*", async (req, res) => {
  const path = req.path;

  let not_found;

  let path_parent;
  while (path_parent !== "/") {
    path_parent = path.posix.dirname(path);

    const not_found_path = path.posix.join("build", path_parent, "404.html");
    if (fs.existsSync(not_found_path)) {
      not_found = await fs.promises.readFile(not_found_path, "utf8");
      break;
    }
  }

  if (not_found) {
    res.status(404).type("text/html").send(not_found);
  } else {
    res.render("404", { url: req.url });
  }
});

const port = parsedArgs.values.port ?? "3000";
const host = parsedArgs.values.host ?? "127.0.0.1";
app.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
