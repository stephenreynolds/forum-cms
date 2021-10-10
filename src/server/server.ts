import "reflect-metadata";
import compression from "compression";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import config from "./config";
import path from "path";
import { attachRoutes } from "./routes";
import { connectToDatabase } from "./data/database";

const start = async () => {
  const app = express();

  // Middleware
  app.use(compression());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan("tiny"));

  // Serve static files
  if (config.isProduction) {
    app.use(express.static(path.join(__dirname, "public")));
  }

  attachRoutes(app);

  // Listen for requests
  app.listen(config.port, config.host, () => {
    console.log(`Server listening on port ${config.host}:${config.port}`);
  });
};

connectToDatabase().then(() => start());