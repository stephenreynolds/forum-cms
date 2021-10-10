import { Express } from "express";
import { getApp } from "./controllers/clientController";

export const attachRoutes = (app: Express) => {
  app.get("/*", getApp);
};