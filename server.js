'use strict';

const express = require('express');
const app = express();


let popularPastries = [
  {name: "donut", price: '$30'},
  {name: "bread", price: '$40'},
  {name: "bagle", price: '$50'},
  {name: "cookies", price: '$70'},
  {name: "Cake", price: '$90'},
]

let getDateInfo = () => {
  return new Date()
}

// use __dirname without public folder
app.use(express.static(__dirname));

// set pug view engine
app.set('view engine', 'pug')


app.get('/', (req, res, next) => {
  res.render('index', { page: 'index'})
})

app.get('/about', (req, res, next) => {
  res.render('about', { page: 'about', date: getDateInfo()})
})

app.get('/inventory', (req, res, next) => {
  res.render('inventory', { page: 'inventory', popularPastries })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
