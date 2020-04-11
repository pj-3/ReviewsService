const fs = require('fs');
const faker = require('faker');
const random_date = require('random-date-generator');
// const csvWriter = require('csv-write-stream');

// const writer = csvWriter();

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

// Jenny Drain CSV article writer
const writeReviews = fs.createWriteStream('reviewData.csv');
writeReviews.write('listing_id,listing_address,user_id,user_name,user_photo,review_id,review_text,rating,review_date\n', 'utf8');
const csvDrainGen = (writer, encoding, callback) => {
    // console.time('CSV');
    let i = 1;
    function write() {
        console.time('CSV');
        let ok = true;
        do {
            let maxReviews = Math.ceil(Math.random() * 7);
            let randomAddress = getAddress();
            let listing_id, listing_address, user_id, user_name, user_photo, review_id, review_text, rating, review_date;
            for (let j = 1; j < maxReviews + 1; j++) {
                listing_id = i;
                listing_address = randomAddress;
                user_id = userCounter++;
                user_name = getUsername();
                user_photo = j;
                review_id = reviewCounter++;
                review_text = getReviewText();
                rating = Math.floor(Math.random() * 6);
                review_date = getDate();
                const newRow = `${listing_id},"${listing_address}",${user_id},${user_name},${user_photo},${review_id},"${review_text}",${rating},${review_date}\n`;
                if (i === 10000001) {
                    console.log('done');
                    console.timeEnd('CSV');
                    writer.write(newRow, encoding, callback);
                } else {
                    ok = writer.write(newRow, encoding);
                }
            }
            if (i % 100000 === 0) {
                console.log(`done with ${i} rows`);
            }
            i++;
        } while (i < 10000001 && ok);
        if (i < 10000001) {
            writer.once('drain', write);
        }
    }
    write();
}

csvDrainGen(writeReviews, 'utf8', () => {
    writeReviews.end();
});

// module.exports = {
//     getDate,
//     // getListingId,
//     getRating,
//     getReviewText,
//     // getUserID,
//     getUsername,
//     getAddress
// }
