const {Router} = require('express');
const distributorController = require('../controllers/DistributorController');


const routesDistributor = Router()
routesDistributor.get('/distributor', distributorController.index);
routesDistributor.post('/distributor', distributorController.store);
routesDistributor.put('/distributor', distributorController.update);
routesDistributor.delete('/distributor', distributorController.destroy);

module.exports = routesDistributor