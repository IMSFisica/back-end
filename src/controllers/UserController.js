const User = require('../models/user');

console.log("entrei no userControlers")
//fonções do controller: index(lista), show(unico), store(criar), update(alterar), destroy(deletar)
module.exports = {
    async index(request, response){
        const users = await User.find({},{UserID:1,UserLocation:1});

        return response.json(users);
    },
    async store(request, response) {
        const { UserID, UserLocation, WaitingTime, ExperimentTime} = request.body;
        user = await User.create({
            UserID,
            UserLocation,
            WaitingTime,
            ExperimentTime,
        });
        return response.json(user);      
    }
}
