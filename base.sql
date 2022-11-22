-- Active: 1669012549341@@127.0.0.1@5432@moviedb@public
CREATE DATABASE moviedb;

CREATE TABLE "users" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "firstName"     VARCHAR(255),
    "lastName"      VARCHAR(255),
    "phoneNumber"   VARCHAR(255),
    "email"         VARCHAR(255),
    "password"      VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO users ("firstName", "lastName", "phoneNumber", "email", "password")
VALUES ('Ilham', 'Danu', '08231111111', 'admin@gmail.com', '1234');
select * from users;

CREATE TABLE "resetPassword" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email"         VARCHAR(255),
    "userId"        INT,
    "code"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);


INSERT INTO "resetPassword" ("email", "userId", "code")
VALUES ('admin@gmail.com', '1', 'QWERTY');
SELECT * from "resetPassword";

CREATE TABLE "movies" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "title"         VARCHAR(255),
    "picture"       VARCHAR(255),
    "releaseDate"   TIMESTAMPTZ,
    "director"      VARCHAR(255),
    "duration"      TIME,
    "synopsis"      TEXT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO movies ("title", "director")
VALUES ('John Wick', 'Chad Stahelski');
SELECT * from movies;

CREATE TABLE "genre" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO genre ("name")
VALUES ('Action');
SELECT * from genre;

CREATE TABLE "moviegenre" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "genreId"       INT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);
INSERT INTO moviegenre ("movieId", "genreId")
VALUES ('1', '1');
 
CREATE TABLE "casts" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO casts ("name")
VALUES ('Keanu Reeves');

CREATE TABLE "moviecasts" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "castsId"       INT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO moviecasts ("movieId", "castsId")
VALUES ('1', '1')

CREATE TABLE "cinemas" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "name"          VARCHAR(255),
    "address"       VARCHAR(255),
    "city"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO cinemas ("name", "address", "city")
VALUES ('CineOne', 'Boulevard st.', 'Semarang');

CREATE TABLE "movieSchedules" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "cinemaId"      INT,
    "price"         BIGINT,
    "startDate"     DATE,
    "endDate"       DATE,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO "movieSchedules" ("movieId", "cinemaId", "price")
VALUES ('1', '1', '30000');

CREATE TABLE "movieScheduleTimes" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "time"          TIME,
    "movieScheduleId" INT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO "movieScheduleTimes" ("movieScheduleId")
VALUES ('1');

CREATE TABLE "status" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO status ("name")
VALUES ('Booked');

CREATE TABLE "transactions" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "bookingDate"   TIMESTAMPTZ,
    "movieId"       INT,
    "cinemaId"      INT,
    "movieScheduleId" INT,
    "fullName"      VARCHAR(255),
    "email"         VARCHAR(255),
    "phoneNumber"   VARCHAR(255),
    "statusId"      INT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO transactions ("movieId", "cinemaId", "movieScheduleId", "fullName", "email", "phoneNumber", "statusId")
VALUES ('1', '1', '1', 'Ilham Danu', 'admin@gmail.com', '08231111111', '1');


CREATE TABLE "reservedSeat" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "seatNum"       VARCHAR(255),
    "transactionId" INT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO "reservedSeat" ("seatNum", "transactionId")
VALUES ('C3', '1');

SELECT * from "reservedSeat";

CREATE TABLE "paymentMethod" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255),
    "picture"       VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO "paymentMethod" ("name")
VALUES ('Ovo');

CREATE TABLE "subscribers" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email"         VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

INSERT INTO subscribers ("email")
VALUES ('admin@gmail.com');

UPDATE "movieSchedules" SET "startDate"='2022-12-15' WHERE id='1';

UPDATE "movieSchedules" SET "endDate"='2023-01-25' WHERE id='1';