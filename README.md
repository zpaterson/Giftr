# Giftr

An app that helps you select the perfect gift for those times you just don’t know what to get someone. Giftr helps you select the perfect gift by retrieving the products that best align with your recipient’s hobbies and interests from listings on Etsy.

**Tech Stack:** SQL, Express, React, Node

**Project Map:** https://docs.google.com/document/d/1X7YQfvnJKm4Ng_a9i5zoWpwS0UKnWzWGpddiF6J6Kh0/edit

**Techtonica Project Outline:** https://github.com/Techtonica/curriculum/blob/master/projects/final-project/final-project.md

***

## App Setup:

1. Clone this repo to your desktop.

   `cd desktop` then `git clone https://github.com/lianthompson/Giftr.git`
   
2. Go into the folder and install the dependencies.

    `cd client` `npm install`

3. Create an .env file and add your API key to it. 

   (Request your own key here: https://www.etsy.com/developers/documentation/getting_started/api_basics)

    `touch .env` 
    `REACT_APP_ETSY_API_KEY={YOUR_KEY_HERE}`
    
4. After setting up your database, run
    
    `yarn dev`

## MySQL Database Setup:

1. Download `Sequel Pro` (http://www.sequelpro.com/)

2. Open `Sequel Pro` and enter the following to establish a connection:

    `Host: 127.0.0.1`
    `Username: root`
   
3. In your root file, create and import the data with the following commands:

    `mysql -u root`
    `CREATE DATABASE Giftr`
    `db-migrate up all`

***

## Current Features:

  * Display data from databases on `localhost:3000/products`
  * Search Etsy's API and display listings
  * Add selected listings to database

## Later Features:

  * Auth0
  * Display 5 optimal gift selections
  * Add more search parameters
  * Add CSS
  * Grab more API data

   
    


