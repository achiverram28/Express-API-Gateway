import { Express, Request, Response } from "express";
import { logger, loggerMiddleware } from "./logger";
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app: Express = express();
app.use(loggerMiddleware);
app.get("/user1", (req: Request, res: Response) => {
  logger.info("user1 route was called");
  res.send("Hello from user1 route");
});
app.listen(process.env.MICRO_SERVICE_ONE_PORT, () => {
  console.log(`Server running on ${process.env.MICRO_SERVICE_ONE_PORT}`);
});
