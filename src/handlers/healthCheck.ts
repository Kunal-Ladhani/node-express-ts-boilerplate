import { logger } from '../utils/logger';
import { Request, Response } from 'express';

const healthCheck = async (_req: Request, res: Response) => {
  logger.info('Server is working');
  res.status(200).json({ message: 'Server is working' });
};

export { healthCheck };
