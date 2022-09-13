const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// route import
const homeRoute = require('./src/routes/homeRoute');

// routing

app.use('/', homeRoute);

app.listen(PORT, () => {
  console.log('Server has started on port:', PORT);
});
