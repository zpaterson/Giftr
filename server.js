const express = require('express');
const cors = require('cors');
const app = express();
const request = require('request');
const port = 8000;
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const router = express.Router();
const mysql = require('mysql');
const logger = require('morgan')
require('dotenv').load();

//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

const API_KEY = process.env.REACT_APP_ETSY_API_KEY;

const API_URL = process.env.API_URL;

const PRODUCT_TITLES_QUERY = 'SELECT TITLE FROM Products';

// Create mySql connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
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
app.use(logger("dev")); 
app.use(bodyParser.urlencoded({ extended: false }));



// app.get('/', (req, res) => {
//     // eventually send entire public folder
//     res.send(JSON.stringify(req.user));
// });


// Signup requirements
// app.post('/register', (req, res) => {
//     //console.log (req.body);
//     req.checkBody('firstName', 'Cannot be empty').notEmpty();
//     req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
//     req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
//     req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
//     req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
//     // req.checkBody('passwordMatch', 'Password must be between 8-100 characters long.').len(8, 100);
//     // req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);

//     const errors = req.validationErrors();
//     if (errors) {
//         console.log(`errors: ${JSON.stringify(errors)}`);

//         res.send("Registration Error");

//         return;
//     }

//     const user = { firstName: req.body.firstName, lastName: req.body.lastName, password: req.body.password, email: req.body.email }

//     // Add users to db 
//     connection.query('INSERT INTO Users SET ?', user, (err, results, fields) => {
//         if (err) throw err;
//         console.log("HELLO");
//         res.send('Registration Complete');
//     })
// })


//connection from Auth0 profile info to import to  db
app.post('/profile', function (req, res) {
    console.log( "i'm here!" ,req.body.email);
    const formInfo = {
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        date: req.body.date
    };
    connection.query('INSERT INTO Users SET ?', formInfo, (err, results, fields) => {
        if (err) throw err;
        res.send('Registration complete')
    })
});

app.post('/added', (req, res) => {

    const productInfo = { 
        listing_id: req.body.listing_id, 
        title: req.body.title, 
    };
    console.log("hello lian", productInfo);


    connection.query('INSERT INTO Products SET ?', productInfo, (err, results, fields) => {
        if (err) throw err;
        res.send({added: 1});
    })
})

app.get('/products', function (req, res) {
    connection.query(PRODUCT_TITLES_QUERY, (err, results) => {
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
    let limit = req.body.amount;
    console.log(req.body);
    request(`http://openapi.etsy.com/v2/listings/active?method=GET&api_key=${API_KEY}&keywords=${keywords}&limit=${limit}`, function (error, response, body) {
        var parsedData = JSON.parse(body);

        if (!error && response.statusCode == 200) {

            return res.send(parsedData['results']);
         }
    });
})

// TODO(Lian): figure out if app.get or app.post is getting called, and only keep the one I need.
// (Does the for loop need to be moved to get()?)


// get request is displaying them on the page
// app.get('/etsy', function (req, res) {

//     let keywords = req.body.keywords;
//     console.log(req.body);
// });

// error handler for MySQL
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
