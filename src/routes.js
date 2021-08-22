const { Router } = require('express');
const UserController = require('./controllers/UserController');
const ExpErrController = require('./controllers/ExpErrController');


const routes = Router();
console.log("entrei no routes")

//rota de cadastro de dados
routes.post('/users', UserController.store);
routes.post('/experr', ExpErrController.store);

//rota de listagem de dados
routes.get('/users', UserController.index);
routes.get('/experr', ExpErrController.index);


module.exports = routes;