import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
import path from "path";

const env = process.env.NODE_ENV || "local";
const dotenv_path = path.resolve(process.cwd(), `.env.${env}`);

dotenv.config({ path: dotenv_path });

if (!process.env.DATABASE_URL)
  throw new Error("DATABASE_URL not found in environment");

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
