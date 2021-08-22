const http = require('http')
const app = require('./app')
require('dotenv').config()
console.log("antes do createServer")
const server = http.createServer(app)
console.log("depois do createServer")

server.listen(process.env.PORT_CONECTION, 'localhost',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`server its on port: ${process.env.PORT_CONECTION}`)
        console.log('press (ctrl + c) to stop this server')
    }

})