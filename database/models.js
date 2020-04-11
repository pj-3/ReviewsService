const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'reviews'
});

client.connect();

//returns all reviews and users (with users attatched to relevant review)
const getReviews = (id, callback) => {
    let queryString = `SELECT * FROM reviews_csv WHERE listing_id = ${id};`
    client.execute(queryString, (err, result) => {
        if(err) {
            // console.log('db/models error');
            callback(err, null);
        } else {
            // console.log('db/models', results);
            callback(null, result);
        }

    })

};

/* test get
getReviews(1, (err, result) => {
    if (err) {
        console.log('yikes');
    } else {
        console.log(result.rows);
    }
})
*/

const postReviews = (params, callback) => {
    let queryString = `INSERT INTO reviews_csv
        (listing_id, review_id, listing_address, rating, review_date, review_text, user_id, user_name, user_photo)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`
    client.execute(queryString, params, {prepare:true}, (err) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, 'ok');
        }
    })
};

/* test post
var testParam = [10000000, 40004259, '3912 Brandyn Valleys, Elroyborough, Utah, 58001', 6, 'Wed Feb 21 1990', 'Hello World', 40004259, 'Hello World', '4'];
postReviews(testParam, (err, result) => {
    if (err) {
        console.log('yikes', err);
    } else {
        console.log('success');
    }
})
*/

/* legacy code
    //returns all of the reviews and users that correspond with a ~random~ listing (will be specific listing now)
    const getOneListing = (callback) => {
        getListings(function( err, result) {
            if(err) {
                console.log('error in getOneListing');
            } else {
            const randomId = Math.floor(Math.random() * Math.floor(100));
            var queryString = "SELECT * FROM reviews, users WHERE reviews.listings_id = ? AND reviews.user_id = users.id;"
            connection.query(queryString, randomId, function(err, result){
                if(err) {
                    callback(err, null);
                } else {
                    callback(err, result);
                }
        
            })

            }
        })
    }
*/



module.exports = {
    getReviews,
    postReviews
}