const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const hbs = require('express-hbs');

const app = express();

// Using handlebars as a view engine
app.engine(
  'hbs',
  hbs.express4({
    defaultLayout: __dirname + '/views/layouts/main.hbs',
    partialsDir: __dirname + '/views/partials'
  })
);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

app.use('/', require('./routes'));

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on ${process.env.PORT || 8080}.`);
});
