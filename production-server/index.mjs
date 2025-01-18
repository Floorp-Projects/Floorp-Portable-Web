import { hookProductionMiddlewares } from "../api/index.mjs";
import express from "express";
import { parseArgs } from "util";
import fs from "fs";

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
  const not_found = await fs.promises.readFile("build/404.html", "utf8");
  res.status(404).type("text/html").send(not_found);
});

const port = parsedArgs.values.port ?? "3000";
const host = parsedArgs.values.host ?? "127.0.0.1";
app.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
