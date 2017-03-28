'use strict';

const express = require('express');
const app = express();


app.use(express.static('public'));

// set pug view engine
app.set('view engine', 'pug')


app.get('/', (req, res, next) => {
  res.render('index')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
