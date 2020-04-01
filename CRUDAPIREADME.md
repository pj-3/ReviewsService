# CRUD API operations

## CREATE aka POST a review

 * **POST** /listings/:listingID/reviews
    * Data sent with the request will be a JSON object containing the listing ID, a userID, the review text, and a rating

## READ aka GET all reviews

 - **GET** /listings/:listingID/reviews
    * Will send a get request with the listingID to retrieve all reviews for the listing

## UPDATE a review

 - **PATCH** /listings/:listingID/reviews/:reviewID
    * Will edit review or rating by goign to the specified review ID and changing the requested value in the database

## DELETE a review

 - **DELETE** /listings/:listingID/reviews/:reviewID
    * Will find the specified review by the reviewID and deleting the associated data from the database