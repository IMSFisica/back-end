const {Model, DataTypes} = require('sequelize')

console.log("entrei no modelsErr")
class ExperimentError extends Model{
    static int(sequelize){
        ErrorCode: DataTypes.STRING
    }
}
module.exports = ExperimentError