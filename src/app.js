const express = require('express');
const { model } = require('mongoose');
const app = express();


app.get('/*', (req, resp)=>{
    resp.status(200).json('Hello world');
})

module.exports={app}