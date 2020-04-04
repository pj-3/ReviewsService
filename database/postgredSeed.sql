/* 
 *  csvDataGen generates a CSV document I can use for both Postgres and Cassandra
 *  I can import the entire csv file into Cassandra and the table will have columns named after each header in the CSV file
 *  Postgres will require that I import the entire csv file to one big individual table then I will have extra command
       lines that will break down the bigger table and import relevant information to the appropriate three tables
       that I have laid out in my schema
 */
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE reviews_csv(
    listing_id INTEGER, 
    listing_address VARCHAR,
    user_id INTEGER,
    user_name VARCHAR,
    user_photo VARCHAR,
    review_id INTEGER,
    review_text VARCHAR,
    rating INTEGER,
    review_date VARCHAR
);
 
COPY reviews_csv FROM '/home/jtangnatj/hrsf126-SDC/reviews-service/database/reviewData.csv' DELIMITER ',' CSV HEADER;
 
CREATE TABLE listings(
    listing_id SERIAL PRIMARY KEY,
    listing_address VARCHAR NOT NULL
);
 
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR NOT NULL,
    user_photo VARCHAR
);
 
CREATE TABLE reviews(
    review_id SERIAL PRIMARY KEY,
    review_text VARCHAR,
    rating INTEGER NOT NULL,
    review_date VARCHAR NOT NULL,
    listing_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL
); 

INSERT INTO listings SELECT listing_id, listing_address FROM reviews_csv ON CONFLICT DO NOTHING;
INSERT INTO users SELECT user_id, user_name, user_photo FROM reviews_csv ON CONFLICT DO NOTHING;
INSERT INTO reviews SELECT review_id, review_text, rating, review_date, listing_id, user_id FROM reviews_csv ON CONFLICT DO NOTHING;

DROP TABLE reviews_csv;

ALTER TABLE reviews ADD CONSTRAINT fk_listings FOREIGN KEY (listing_id) REFERENCES listings(listing_id);
ALTER TABLE reviews ADD CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(user_id);
