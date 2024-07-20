const path = require('path');
const express = require('express');
const user_route = require('../routes/routes');
const app = express();


app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));
app.use(user_route)




module.exports={app}