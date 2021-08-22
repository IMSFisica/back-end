const ExpErr = require('../models/ExpErr');
//const parseStringAsArray = require('../utils/parseStringAsArray');

console.log("entrei no expErr")
module.exports = {
    async index(request, response){
        let expErr = await ExpErr.find({},{ErrorCode:1});
        return response.json(expErr);
    },
    async store(request, response) {
        const { ErrorCode, ErrorDate, ErrorTime} = request.body;
          
        expErr = await ExpErr.create({
            ErrorCode
        });
        return response.json(expErr);
    }
    
}
