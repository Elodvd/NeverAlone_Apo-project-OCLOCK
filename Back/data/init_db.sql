BEGIN;

DROP TABLE IF EXISTS "user", "event", "category", "event_has_category", "event_has_user";


CREATE TABLE "user" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "email" varchar(50) NOT NULL UNIQUE,
    "first_name" varchar(50) NOT NULL,
    "last_name" varchar(50) NOT NULL,
    "pseudo" varchar(50) NOT NULL,
    "password" varchar(255) NOT NULL,
    "birthday" date NOT NULL,
    "postal_code" varchar(5) NOT NULL,
    "image" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
    
);

CREATE TABLE "event" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "title" varchar(255) NOT NULL,
    "description" text NOT NULL,
    "date_hour" timestamptz NOT NULL,
    "capacity" int NOT NULL, 
    "price" varchar(50) NOT NULL,
    "adress" varchar(500) NOT NULL,
    "image" text NOT NULL,
    "user_id" int NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz

);

CREATE TABLE "category" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" varchar(50) NOT NULL,
    "color" varchar(50),
    "image" text NOT NULL,
    "created_at" timestamptz DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "event_has_user" (
    "id" int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "event_id" int NOT NULL REFERENCES "event" ("id"),
    "user_id" int NOT NULL REFERENCES "user" ("id"),
    "comment" text,
    "created_at" timestamptz DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "event_has_category" (
    "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "event_id" INT NOT NULL REFERENCES "event" ("id"),
    "category_id" INT NOT NULL REFERENCES "category" ("id"),
    "created_at" timestamptz DEFAULT now(),
    "updated_at" timestamptz
);



COMMIT;