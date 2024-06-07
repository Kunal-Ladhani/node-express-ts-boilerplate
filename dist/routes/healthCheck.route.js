"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckRoute = void 0;
const express_1 = __importDefault(require("express"));
const handlers_1 = require("../handlers");
const healthCheckRoute = express_1.default.Router();
exports.healthCheckRoute = healthCheckRoute;
healthCheckRoute.get('/health', handlers_1.healthCheck);
//# sourceMappingURL=healthCheck.route.js.map