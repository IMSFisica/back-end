const {Router} = require('express');
const productController = require('../controllers/ProductController');


const routesProduct = Router();
routesProduct.get('/product', productController.index);
routesProduct.post('/product', productController.store);
routesProduct.put('/product', productController.update);
routesProduct.delete('/product', productController.destroy);

module.exports = routesProduct;