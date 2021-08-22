const express = require('express');
const conectDataBase = require('./db/dbSQL')
const routes = require('./routes');

require('dotenv').config();

const app = express();


app.use(express.json()); //faz a aplicação entender json
app.use(routes)

//conexão com DataBase
//conectDataBase();

module.exports = app