import { Request, Response } from "express";
import config from "../config";
import path from "path";

export const getApp = async (request: Request, response: Response) => {
  if (config.isProduction) {
    response.sendFile(path.resolve(__dirname, "public/index.html"));
  }
  else {
    response.redirect(
      `http://${config.host}:${config.devPort}${request.originalUrl}`
    );
  }
};