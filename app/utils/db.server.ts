/**
 * This file prevent the server from restarting the server or creating
 * a new connection every time we make changes in development.
 */

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
