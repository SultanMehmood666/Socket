require('dotenv').config();
const {app} = require('./src/app');
const http = require('http');
const port = process.env.PORT || 5000;
const {Connection} = require('./db/connection');

async function runServer(){
    try{
        const server = http.createServer(app);
        await Connection();
        server.listen(port, ()=>{
                console.log(`Server is running on ${port}`)
        })
    }catch(error){
        console.log(`Server is running on ${port}`)
}   
}

runServer();

