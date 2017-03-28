'use strict';

const express = require('express');
const app = express();


let popularPastries = {
  donut: {price: 30},
  bread: {price: 20},
  bagle: {price: 10}
}

// use __dirname without public folder
app.use(express.static(__dirname));

// set pug view engine
app.set('view engine', 'pug')


app.get('/', (req, res, next) => {
  res.render('index', { page: 'index'})
})

app.get('/about', (req, res, next) => {
  res.render('about', { page: 'about'})
})

app.get('/inventory', (req, res, next) => {
  res.render('inventory', { page: 'inventory', popularPastries })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
