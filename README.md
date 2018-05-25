# Giftr

An app that helps you select the perfect gift for those times you just don’t know what to get someone. Giftr helps you select the perfect gift by retrieving the products that best align with your recipient’s hobbies and interests from listings on Etsy.

**Tech Stack:** SQL, Express, React, Node

**Project Map:** [https://docs.google.com/document/d/1X7YQfvnJKm4Ng_a9i5zoWpwS0UKnWzWGpddiF6J6Kh0/edit]

**Techtonica Project Outline:** [https://github.com/Techtonica/curriculum/blob/master/projects/final-project/final-project.md]

***

## App Setup:

1. Clone this repo to your desktop.
   `cd desktop` then `git clone https://github.com/lianthompson/final_react_project.git`
   
2. Go into the folder and install the dependencies.

    `cd final-react-project` `npm install`

3. Create an .env file and add your API key to it. (Request your own key here: [https://www.etsy.com/developers/documentation/getting_started/api_basics])

    `touch .env` 
    `REACT_APP_ETSY_API_KEY={YOUR_KEY_HERE}`
    
4. After setting up your database, run
    
    `npm run dev`

## MySQL Database Setup:

1. Download `Sequel Pro` ([http://www.sequelpro.com/])

2. Open `Sequel Pro` and enter the following to establish a connection:

    ```Host: 127.0.0.1
       Username: root```
   
3. Create a database named `Giftr` with the tables `Products`, `Purchases`, `Recipients`, `Users`.

  * In `Products` add the columns `title`, `description`, `purchase_id`
  * In `Purchases` add the columns `product_id`, `user_id`, `recipient_id`
  * In `Recipients` add the columns `email`, `firstName`, `lastName`
  * In `Users` add the columns `firstName`, `lastName`, `email`

***

## Current Features:

  * Display dummy data from databases on `localhost:4000/products`
  * Display landing page on `localhost:3000`
  * Display redirect page on `localhost:4000`
  * Type text in search

## Later Features:

  * User Sign in/Sign up
  * Search retreives Etsy API data
  * Display 3 optimal gift selections
  * Purchase history page

   
    


