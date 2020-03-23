const express = require('express');
const app = express();
const models = require('../database/models.js')

app.use(express.static(
    __dirname + '/../dist'))
//make app.get which returns each listing with all of its corresponding reviews and users
app.listen(2500, () => {
    console.log('listening on port 2500');
});

app.get('/', function(req, res) {
    res.end();
})
app.get('/listings', function(request, response){
    models.getListings( function(err, result) {
        if(err) {
            console.log('error retrieving listings');
        } else {
            response.send(result);
        }
    })
})

app.get('/onelisting', function(request, response){
        models.getOneListing( function(err, result) {
            if(err) {
                console.log('error retrieving listing');
            } else {
                response.send(result);
            }
        })
    })
