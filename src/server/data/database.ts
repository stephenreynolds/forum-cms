import { Connection, createConnection } from "typeorm";
import { Role } from "./entities/role";
import config from "../config";

const seedData = async (connection: Connection) => {
  const user: Role = { name: "user" };
  const moderator: Role = { name: "moderator" };
  const admin: Role = { name: "admin" };

  await connection
    .createQueryBuilder()
    .insert()
    .into(Role)
    .values([user, moderator, admin])
    .orIgnore()
    .execute();
};

export const connectToDatabase = async () => {
  const connection = await createConnection(config.connectionOptions);
  await seedData(connection);
};