import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
  db.$connect();
} else {
  if (!globalThis.__db) {
    globalThis.__db = new PrismaClient();
    globalThis.__db.$connect();
  }
  db = globalThis.__db;
}

export { db };
	