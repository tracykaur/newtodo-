const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// const api = require('./routes/api');
let Products = require('./models/products');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* Pretty User Views */
app.get('/products/new', (req, res) => {
  Product.find().then((products) => {
    res.render('products', {products: products});
  })
});

app.post('/products', (req, res) => {
  let product_name = req.body.student_name;
  Product.create({name: product_name}).then(() =>{
  res.redirect('/products');
})
})













app.listen(port);
