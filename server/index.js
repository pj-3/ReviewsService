require('newrelic');
const express = require('express');
const app = express();
const models = require('../database/models.js');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, '/../dist')));
app.listen(2500, () => {
    console.log('listening on port 2500');
});

// app.get('/', function(req, res) {
//     res.end();
// })

app.get('/api/listings/:listingID/reviews', function(req, res){
    const id = req.params.listingID;
    models.getReviews(id, function(err, result) {
        if(err) {
            console.log('error retrieving listings');
        } else {
            // console.log('server results', result.rows);
            res.send(result.rows);
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../dist/'));
})

app.get('/loaderio-3838dccfd49e3b83d769221ae9ee1ef6/', (req, res) => {
    res.sendFile('loaderio-3838dccfd49e3b83d769221ae9ee1ef6');
})

/* legacy code
app.get('/onelisting', function(request, response){
        models.getOneListing( function(err, result) {
            if(err) {
                console.log('error retrieving listing');
            } else {
                response.send(result);
            }
        })
    })
*/
