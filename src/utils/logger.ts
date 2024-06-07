import winston from 'winston';

const levels = {
  emerg: 0,
  alert: 1,
  crit: 2,
  error: 3,
  warn: 4,
  notice: 5,
  info: 6,
  //   http: 3,
  //   verbose: 4,
  debug: 7,
  //   silly: 6,
};

/*
FATAL
ERROR
WARN
INFO
DEBUG
TRACE
*/

const colors = {
  emerg: 'red',
  alert: 'orange',
  crit: 'yellow',
  error: 'magenta',
  warn: 'green',
  notice: 'blue',
  info: 'cyan',
  debug: 'white',
};

winston.addColors(colors);
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);

const transports = [new winston.transports.Console()];

export const logger = winston.createLogger({
  levels,
  format,
  transports,
});
