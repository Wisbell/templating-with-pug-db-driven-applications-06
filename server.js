'use strict';

const express = require('express');
const app = express();


let popularPastries = {
  donut: 30,
  bread: 20,
  bagle: 10
}


app.use(express.static('/'));

// set pug view engine
app.set('view engine', 'pug')


app.get('/', (req, res, next) => {
  res.render('index')
})

app.get('/about', (req, res, next) => {
  res.render('about')
})

app.get('/inventory', (req, res, next) => {
  res.render('inventory', { popularPastries })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
