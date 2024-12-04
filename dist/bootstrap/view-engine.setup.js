"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupViewEngine = setupViewEngine;
const config_1 = require("../config");
function setupViewEngine(app) {
    app.useStaticAssets(config_1.appConfig.staticAssets.directory);
    app.setBaseViewsDir(config_1.appConfig.views.directory);
    app.setViewEngine(config_1.appConfig.views.engine);
}
//# sourceMappingURL=view-engine.setup.js.map