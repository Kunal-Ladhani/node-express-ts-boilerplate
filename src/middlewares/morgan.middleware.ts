import morgan, { StreamOptions } from 'morgan';
import { logger } from '../utils/logger';

const stream: StreamOptions = {
  write: (message) => logger.info(message),
};

// Build the morgan middleware
const morganLoggerMiddleware = morgan('combined', { stream: stream });

export { morganLoggerMiddleware };
