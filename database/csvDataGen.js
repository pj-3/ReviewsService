const fs = require('fs');
const faker = require('faker');
const random_date = require('random-date-generator');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

const getReviewText = () => {
    var randomLength = Math.floor(Math.random() * 30);
    return faker.random.words(randomLength);
}

const getRating = () => {
    return Math.floor(Math.random() * 6);
}

const getDate = () => {
    var date = random_date.getRandomDate().toDateString();
    return date;
}

//assuming will have around 10 reviews per listing
// const getListingId = () => {
//     return Math.ceil(Math.random() * 10000);
// }

const getAddress = () => {
    return faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.state() + ', ' + faker.address.zipCode()
}

//doesnt really matter how unique each user is, could be unique but doesnt need to be
// const getUserID = () => {
//     return Math.ceil(Math.random() * 100);
// }

const getUsername = ()=>  {
    return faker.name.firstName() + ' ' + faker.name.lastName();
}

var reviewCounter = 1;
var userCounter = 1;

const csvGenerator = () => {
    writer.pipe(fs.createWriteStream('reviewData.csv'));
    console.time('CSV');
    for (let i = 1; i < 100001; i++) {
        maxReviews = Math.floor(Math.random() * 26);
        var randomAddress = getAddress();
        for (let j = 1; j < maxReviews; j++) {
            writer.write({
                listing_id: i,
                listing_address: randomAddress,
                user_id: userCounter++,
                user_name: getUsername(),
                user_photo: "https://loremflickr.com/320/240/selfie/?random=",
                review_id: reviewCounter++,
                review_text: getReviewText(),
                rating: getRating(),
                review_date: getDate()
            })
        }
        if(i % 10000 === 0) {
            console.log(`done with ${i} rows`)
        }
    }
    writer.end();
    console.log('done');
    console.timeEnd('CSV');
}

csvGenerator();
// console.log(getDate());

// module.exports = {
//     getDate,
//     // getListingId,
//     getRating,
//     getReviewText,
//     // getUserID,
//     getUsername,
//     getAddress
// }
