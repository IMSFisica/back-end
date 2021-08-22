const {Model, DataTypes} = require('sequelize')

class ExperimentData extends Model{
    static int(sequelize){
        DataID: DataTypes.UUIDV1
        DataDistance: [DataTypes.FLOAT]
        DataAnalog: [DataTypes.FLOAT]
    }
}
module.exports = ExperimentData
