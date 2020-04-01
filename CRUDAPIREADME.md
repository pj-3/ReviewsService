# CRUD API operations

## CREATE aka POST a review

 * **POST** /properties/:propertyID/reviews
    * Data sent with the request will be a JSON object containing the property ID, a userID and the review text

## READ aka GET all reviews

 - **GET** /properties/:propertyID/reviews

## UPDATE a review

 - **PATCH** /properties/:propertyID/reviews/:reviewID

## DELETE a review

 - **DELETE** /properties/:propertyID/reviews/:reviewID