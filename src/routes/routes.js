const routesUser = require('./user')
const routesProduct = require('./product')
const routesDistributor = require('./distibutor')
const routesStock = require('./stock')
const routesSearch = require('./search')

const routes2 = [routesUser, routesProduct, routesDistributor, routesStock, routesSearch]
console.log( routes2)

module.exports = routes2