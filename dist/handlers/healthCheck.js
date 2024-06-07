"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = void 0;
const logger_1 = require("../utils/logger");
const healthCheck = async (_req, res) => {
    logger_1.logger.info('Server is working');
    res.send('Server is working');
};
exports.healthCheck = healthCheck;
//# sourceMappingURL=healthCheck.js.map