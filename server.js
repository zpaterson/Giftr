const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
// const port = 3000;
// change to 3001 for create-react-app 
const mysql = require('mysql');
require('dotenv').load();
// create authO developer account, apply sample code to here, create sample link
// implement app.get/api/me in server, go to client code and use this endpoint to make sure they are logged in
// all backend points should also have this feature

const API_KEY = process.env.REACT_APP_ETSY_API_KEY;

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM Products';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'Giftr'
});

connection.connect(err => {
    if(err) {
        return err;
    }
    console.log(connection);
});

app.use(cors({ credentials: true, origin: true }));

app.get('/', (req, res) => {
    res.send('go to /products for products');
});

app.post('/register', (req, res) => {
    var register = req.body;
        if(err) throw error;
    res.render('Registration Complete');
});

 app.get('/products', function(req, res){
     connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
         if (err) {
             console.log(err);
             return res.send(err)
         } else {
             console.log(results);
             return res.json({
                 data: results
             })
         }
     })


    // request(`https://openapi.etsy.com/v2/featured_treasuries/listings?api_key=${API_KEY}`, function(error, response, body){
    //     if(!error && response.statusCode == 200) {
    //         var parsedData = JSON.parse(body);
    //         //console.log(body);
    //         res.send(parsedData);


            //  res.send(body["data"]["results"][0]["title"]);
            //  console.log(body["data"]["results"][0]["title"]);
        }
    // });
 );

app.listen(4000, () => console.log(`Listening on port 4000`));
