"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const levels = {
    emerg: 0,
    alert: 1,
    crit: 2,
    error: 3,
    warn: 4,
    notice: 5,
    info: 6,
    debug: 7,
};
const colors = {
    emerg: 'red',
    alert: 'orange',
    crit: 'yellow',
    error: 'magenta',
    warn: 'green',
    notice: 'blue',
    info: 'indigo',
    debug: 'violet',
};
winston_1.default.addColors(colors);
const format = winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
const transports = [new winston_1.default.transports.Console()];
exports.logger = winston_1.default.createLogger({
    levels,
    format,
    transports,
});
//# sourceMappingURL=logger.js.map