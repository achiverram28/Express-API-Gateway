import { Express, Request, Response } from "express";
import { logger, loggerMiddleware } from "./logger";
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app: Express = express();
app.use(loggerMiddleware);
app.get("/user2", (req: Request, res: Response) => {
  logger.info("user2 route was called");
  res.status(200).send("Hello from user2 route");
});
app.listen(process.env.MICRO_SERVICE_TWO_PORT, () => {
  console.log(
    `Server is running on port ${process.env.MICRO_SERVICE_TWO_PORT}`
  );
});
