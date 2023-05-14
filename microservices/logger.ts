const pino = require("pino");
import { Options } from "express-pino-logger";
const expressPinoLogger = require("express-pino-logger");
export const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      levelFirst: true,
      translateTime: true,
      colorize: true,
    },
  },
});
const optionsWithLogger: Options = { logger };
export const loggerMiddleware = expressPinoLogger(optionsWithLogger);
