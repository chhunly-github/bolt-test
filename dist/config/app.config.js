"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const path_1 = require("path");
exports.appConfig = {
    staticAssets: {
        directory: (0, path_1.join)(__dirname, '..', '..', 'public'),
    },
    views: {
        directory: (0, path_1.join)(__dirname, '..', '..', 'views'),
        engine: 'hbs',
    },
    server: {
        port: process.env.PORT || 3000,
    },
};
//# sourceMappingURL=app.config.js.map