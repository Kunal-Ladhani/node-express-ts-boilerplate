import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import createHttpError from 'http-errors';
import http from 'http';

import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

import { handleError } from './helpers';
import { morganLoggerMiddleware } from './middlewares';
import { healthCheckRoute } from './routes';
import { logger } from './utils/logger';

const app: express.Application = express();

const PORT = process.env.PORT ?? 3000;
app.set('port', PORT);

app.use(morganLoggerMiddleware);

app.use(bodyParser.text());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser());

app.use(cors());

app.use(healthCheckRoute);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createHttpError(404));
});

// error handler
const errorHandler: express.ErrorRequestHandler = (err, _req, res) => {
  handleError(err, res);
};
app.use(errorHandler);

const server = http.createServer(app);

function onError(error: { syscall: string; code: string }) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      process.exit(1);
      break;
    case 'EADDRINUSE':
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
  console.info(`Server is listening on ${bind}`);
}

app.listen(PORT, () => {
  logger.info(`Travel app listening on port ${PORT}`);
});
server.on('error', onError);
server.on('listening', onListening);
