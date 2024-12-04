"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bootstrap_1 = require("./bootstrap");
const config_1 = require("./config");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        (0, bootstrap_1.setupViewEngine)(app);
        await app.listen(config_1.appConfig.server.port);
        console.log(`Application is running on: http://localhost:${config_1.appConfig.server.port}`);
    }
    catch (error) {
        console.error('Error starting the application:', error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map