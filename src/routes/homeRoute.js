const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('<h1>Kidbrook Masjid</h1>');
});

module.exports = route;
