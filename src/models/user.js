const {Model, DataTypes} = require('sequelize')
console.log("entrei no modelsUser")
class User extends Model{
    static int(sequelize){
        UserID: DataTypes.STRING
        UserLocation: DataTypes.STRING
        WaitingTime: DataTypes.INTEGER
        ExperimentTime: DataTypes.INTEGER
    }
}
module.exports = User