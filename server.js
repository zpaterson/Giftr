const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request');
const port = 3001;
require('dotenv').load();
// create authO developer account, apply sample code to here, create sample link
// implement app.get/api/me in server, go to client code and use this endpoint to make sure they are logged in
// all backend points should also have this feature

const API_KEY = process.env.REACT_APP_ETSY_API_KEY;
console.log(API_KEY);

app.use(cors({ credentials: true, origin: true }))

 app.get('/products', function(req, res){
    //  const products = [
    //     {id: 1, title: "handbag", description: "black"},
    //     {id: 2, title: "shoe", description: "sneaker"},
    //     {id: 3, title: "hat", description: "baseball"},
    //  ];
    //  res.json(products);
    request(`https://openapi.etsy.com/v2/featured_treasuries/listings?api_key=${API_KEY}`, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var parsedData = JSON.parse(body);
            //console.log(body);
            res.send(parsedData);


            //  res.send(body["data"]["results"][0]["title"]);
            //  console.log(body["data"]["results"][0]["title"]);
        }
    });
 });

app.listen(port, () => console.log(`Listening on port ${port}`));
