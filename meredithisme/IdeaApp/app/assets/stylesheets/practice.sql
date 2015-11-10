DROP DATABASE IF EXISTS practice;
CREATE DATABASE practice;


CREATE TABLE author (
  id SERIAL primary key,
  firstName VARCHAR(255),
  year_of_birth INTEGER, /* also known as yob */
  year_of_death NUMERIC DEFAULT 'NaN',
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT now()
); 	

-- ALTER TABLE author DROP COLUMN description;

-- ALTER TABLE author RENAME TO authors;

-- ALTER TABLE authors RENAME COLUMN firstName TO first_name;

-- DROP TABLE authors;