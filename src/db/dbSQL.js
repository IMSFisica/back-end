const { Sequelize } = require('sequelize');
const mysqlConfig = require('../config/mysql')
const User = require('../models/user')
const ExpData = require('../models/ExpData')
const ExpErr = require('../models/ExpErr')



async function mysqlConect() {
    const sequelize = new Sequelize(mysqlConfig.development);
    try {
        await sequelize.authenticate();
        console.log('Connection with mySQL has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    initAndAssociate(sequelize)

    return    
}

async function initAndAssociate(Connection){
    User.init(Connection)
    ExpData.init(Connection)
    ExpErr.init(Connection)

    User.associate(Connection.models)
    ExpData.associate(Connection.models)
    ExpErr.associate(Connection.models)
    //consign ou require-directory para automatizar
}



module.exports = mysqlConect;