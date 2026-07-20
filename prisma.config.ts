import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
