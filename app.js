const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// const api = require('./routes/api');
let Todos = require('./models/products');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


















app.listen(port);
