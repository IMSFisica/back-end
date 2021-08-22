const ExpData = require('../models/ExpData');

//fonções do controller: index(lista), show(unico), store(criar), update(alterar), destroy(deletar)
module.exports = {
    async index(request, response){
        let expData = await ExpData.find({},{DataDistance:1,DataAnalog:1});
        return response.json(expData);
    },
    async store(request, response) {
        const { DataDistance, DataAnalog} = request.body;
        expData = await ExpData.create({
            DataID,
            DataDistance,
            DataAnalog
        });
        return response.json(expData);
    }
}