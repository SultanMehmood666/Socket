const path = require('path');
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));


app.get('/*', (req, resp)=>{
    resp.status(200).send(path.join(process.cwd(), "public"));
})

module.exports={app}