import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  name: varchar("title", { length: 128 }),
  completed: boolean("completed").notNull().default(false),
});

export type Task = typeof tasks.$inferSelect;
export type NewTask = typeof tasks.$inferInsert;
