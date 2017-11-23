const { mongoose, db} = require('../database');
student = db.model('Products', { name: String, price: Number });

module.exports = Products;
