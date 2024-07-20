require('dotenv').config();
const {app} = require('./src/app');
const http = require('http');
const port = process.env.PORT || 5000;


async function runServer(){
    const server = http.createServer(app);

    server.listen(port, (error)=>{
        if(error){
            console.log(`There is an error: ${error}`)
        }
        console.log(`Server is running on ${port}`)
    })
}

runServer();

