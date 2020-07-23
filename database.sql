-- createdb react_axios_artists

CREATE TABLE artists
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(60) NOT NULL,
    "known_for" VARCHAR(180)
);