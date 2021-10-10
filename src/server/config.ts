import { ConnectionOptions } from "typeorm";
import { User } from "./data/entities/user";
import { Role } from "./data/entities/role";
import { Post } from "./data/entities/post";

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  logging: false,
  entities: [User, Role, Post],
  migrations: [],
  subscribers: []
};

export default {
  port: Number(process.env.PORT || 4001),
  devPort: Number(process.env.DEV_PORT || 4000),
  host: process.env.HOST || "localhost",
  isProduction: process.env.NODE_ENV === "production",
  secret: process.env.SECRET,
  connectionOptions
};