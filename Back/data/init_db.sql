BEGIN;

DROP TABLE IF EXISTS "user", "event", "category", "event_has_category", "event_has_user";


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "email" varchar(50) NOT NULL,
    "first_name" varchar(50) NOT NULL,
    "last_name" varchar(50) NOT NULL,
    "pseudo" varchar(50) NOT NULL,
    "password" varchar(255) NOT NULL,
    "birthday" date NOT NULL,
    "postal_code" varchar(5),
    "image" text ,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
    
);

CREATE TABLE "event" (
    "id" SERIAL PRIMARY KEY,
    "title" varchar(50) NOT NULL,
    "description" text NOT NULL,
    "date" timestamptz NOT NULL,
    "capacity" int NOT NULL, 
    "price" varchar(50) NOT NULL,
    "city" varchar(50) NOT NULL,
    "adress" varchar(500) NOT NULL,
    "category" varchar(50) NOT NULL,
    "counter" int DEFAULT 0,
    "user_id" int NOT NULL REFERENCES "user"("id")ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz

);

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(50) NOT NULL UNIQUE,
    "color" varchar(50),
    "image" text ,
    "created_at" timestamptz DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "event_has_user" (
    "id" SERIAL PRIMARY KEY,
    "event_id" int NOT NULL REFERENCES "event" ("id")ON DELETE CASCADE,
    "user_id" int NOT NULL REFERENCES "user" ("id")ON DELETE CASCADE,
    "comment" text,
    "created_at" timestamptz DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "event_has_category" (
    "id" SERIAL PRIMARY KEY,
    "event_id" INT NOT NULL REFERENCES "event" ("id")ON DELETE CASCADE,
    "category_id" INT NOT NULL REFERENCES "category" ("id")ON DELETE CASCADE,
    "created_at" timestamptz DEFAULT now(),
    "updated_at" timestamptz
);


COMMIT;