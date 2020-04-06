DROP KEYSPACE IF EXISTS reviews;
CREATE KEYSPACE IF NOT EXISTS reviews WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE reviews;

CREATE TABLE reviews_csv(
    listing_id int, 
    listing_address text,
    user_id int,
    user_name text,
    user_photo text,
    review_id int,
    review_text text,
    rating int,
    review_date text,
    PRIMARY KEY ((listing_id), review_date)
);

COPY reviews_csv(listing_id, listing_address, user_id, user_name, user_photo, review_id, review_text, rating, review_date) FROM '/home/jtangnatj/hrsf126-SDC/reviews-service/database/reviewData.csv' WITH HEADER=TRUE AND DELIMITER=',';