
BEGIN;

DROP TABLE IF EXISTS CASCADE;

CREATE TABLE admin (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  password VARCHAR(250) NOT NULL
);
INSERT INTO AdminPanel (name, post)
VALUES ('sultan', 'sultan');

CREATE TABLE members (
               id SERIAL PRIMARY KEY,
               username VARCHAR(25) NOT NULL,
               password VARCHAR(100) not null
             );

CREATE TABLE posts (
               id SERIAL PRIMARY KEY,
               member_id INTEGER REFERENCES members(id),
               contents VARCHAR(1500)
             );


COMMIT;
