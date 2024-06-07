import express from 'express';

import { healthCheck } from '../handlers';

const healthCheckRoute = express.Router();

healthCheckRoute.get('/health', healthCheck);

export { healthCheckRoute };
