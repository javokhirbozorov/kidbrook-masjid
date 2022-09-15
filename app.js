const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

// route import
const homeRoute = require('./src/routes/homeRoute');

// routing

app.use('/', homeRoute);

app.listen(PORT, () => {
  console.log('Server has started on port:', PORT);
});
