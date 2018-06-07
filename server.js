const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request');
const port = 8000;
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const router = express.Router();
const mysql = require('mysql');
const auth0 = require('auth0-oauth2-express');
require('dotenv').load();

const API_KEY = process.env.REACT_APP_ETSY_API_KEY;

const API_URL = process.env.API_URL;

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM Products';


// Create mySql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Giftr'
});

connection.connect(err => {
    if (err) {
        return err;
    }
    // console.log(connection);
});

// Middleware
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(auth0({}));


app.get('/', (req, res) => {
    // eventually send entire public folder
    res.send('go to /products for products');
});

app.get('/callback', (req, res) => {
    res.send("hello");
});

// Signup requirements
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

        return;
    }

    const user = { firstName: req.body.firstName, lastName: req.body.lastName, password: req.body.password, email: req.body.email }

    // Add users to db 
    connection.query('INSERT INTO Users SET ?', user, (err, results, fields) => {
        if (err) throw err;
        console.log("HELLO");
        res.send('Registration Complete');
    })
})

app.get('/products', function (req, res) {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if (err) {
            console.log(err);
            return res.send(err)
        } else {
            // displays db query in terminal
            // console.log(results);
            // Display db query in GUI
            return res.json({
                data: results
            })
        }
    })
});


app.post('/etsy', function (req, res) {
    let keywords = req.body.keywords;
    console.log(req.body);
    request(`http://openapi.etsy.com/v2/listings/active?method=GET&api_key=${API_KEY}&keywords=${keywords}&includes=Images:1`, function (error, response, body) {
        var parsedData = JSON.parse(body);

        if (!error && response.statusCode == 200) {

             var results = [];
             for (let i = 0; i < 5; i++) {
                 results.push(parsedData['results'][i].title);

            } return res.send(results);
         }
    });
})

app.get('/etsy', function (req, res) {
    let keywords = req.body.keywords;
    console.log(req.body);
    request(`http://openapi.etsy.com/v2/listings/active?method=GET&api_key=${API_KEY}&keywords=${keywords}&includes=Images:1`, function (error, response, body) {
        var parsedData = JSON.parse(body);

        if (!error && response.statusCode == 200) {

            var results = [];
            for (let i = 0; i < 5; i++) {
                results.push(parsedData['results'][i].title);
                console.log(results);
            } return res.send(results);
        }
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
