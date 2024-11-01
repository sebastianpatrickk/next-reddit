CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(128),
	"completed" boolean DEFAULT false NOT NULL
);
