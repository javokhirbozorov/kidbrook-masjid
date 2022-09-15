require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = function renderTemplate(reactEl, props, res) {
  const homePage = React.createElement(reactEl, props);
  const html = ReactDOMServer.renderToStaticMarkup(homePage);
  res.write('<!DOCTYPE html>');
  res.write(html);
  res.end();
};
