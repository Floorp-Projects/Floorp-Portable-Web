import * as portableLatestRelease from "./portable-latest-release.mjs";

const addingMiddlewareConfigs = [
  portableLatestRelease
];

export function hookDevServerSetupMiddlewares(setupMiddlewares) {
  return function (middlewares, devServer) {

    for (const config of addingMiddlewareConfigs.reverse()) {
      middlewares.unshift({
        name: config.name,
        path: config.path,
        middleware: config.middleware
      });
    }

    setupMiddlewares(middlewares, devServer);

    return middlewares;
  }
}

export function hookProductionMiddlewares(app) {
  for (const config of addingMiddlewareConfigs.reverse()) {
    app.use(config.path, config.middleware);
  }
}
