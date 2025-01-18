import AsyncLock from "async-lock";

const lock = new AsyncLock();

let content_cache = null;

export const name = "";
export const path = "/api/portable-latest-release";

export function middleware(req, res) {
  return lock.acquire(path, async () => {
    const github_token = process.env.GITHUB_TOKEN;

    let content;

    if (content_cache) {
      content = content_cache;
    } else {
      const result = await fetch(
        "https://api.github.com/repos/Floorp-Projects/Floorp-Portable/releases/latest",
        {
          headers: {
            "Authorization": github_token ? `Bearer ${github_token}` : undefined,
          }
        },
      );
      if (!result.ok) {
        res.status(500);
        return;
      }

      content = await result.text();

      content_cache = content;
      setTimeout(() => {
        content_cache = null;
      }, 1000 * 60 * 5 /* 5 minutes */);
    }

    res.status(200).type("application/json").send(content);
  });
}
