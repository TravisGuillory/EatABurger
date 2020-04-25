// --Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

var app = express();
const PORT = process.env.PORT || 3000;

// -- Static file served from the public directory
app.use(express.static('public'));

// Middleware for parsing url and JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// --Set import for routes

const routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
    console.log('Server is listening on http://localhost:' + PORT);
});

