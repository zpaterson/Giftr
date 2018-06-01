const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request');
const port = 8000;
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const router = express.Router();
const mysql = require('mysql');
const birds = require('./Routes/birds');
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
    // console.log(connection);
});

app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());
app.use(expressValidator());

app.use('/birds', birds)

app.get('/', (req, res) => {
    res.send('go to /products for products');
});


app.post('/register', (req, res) => {
    //console.log (req.body);

    req.checkBody('firstName', 'Cannot be empty').notEmpty();
    req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
    req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
    req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
    req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
    // req.checkBody('passwordMatch', 'Password must be between 8-100 characters long.').len(8, 100);
    // req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
        console.log(`errors: ${JSON.stringify(errors)}`);

        res.send("Registration Error");
    }

    const user = { firstName: req.body.firstName, lastName: req.body.lastName, password:req.body.password, email: req.body.email}

    connection.query('INSERT INTO Users SET ?', user, (err, results, fields) => {
        if (err) throw err;

        res.send('Registration Complete');
    })
})


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

 app.get('/register', function(req, res){
     (err, results) => {
         if (err) {
            console.log(err);
            return res.send(err)
        } else {
            console.log('registration complete');
    }
    }
})


    // request(`https://openapi.etsy.com/v2/featured_treasuries/listings?api_key=${API_KEY}`, function(error, response, body){
    //     if(!error && response.statusCode == 200) {
    //         var parsedData = JSON.parse(body);
    //         //console.log(body);
    //         res.send(parsedData);


    //          res.send(body["data"]["results"][0]["title"]);
    //          console.log(body["data"]["results"][0]["title"]);
        }
    // });
 );


app.listen(port, () => console.log(`Listening on port ${port}`));
