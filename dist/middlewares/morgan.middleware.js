"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganLoggerMiddleware = void 0;
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = require("../utils/logger");
const stream = {
    write: (message) => logger_1.logger.info(message),
};
const morganLoggerMiddleware = (0, morgan_1.default)('combined', { stream: stream });
exports.morganLoggerMiddleware = morganLoggerMiddleware;
//# sourceMappingURL=morgan.middleware.js.map