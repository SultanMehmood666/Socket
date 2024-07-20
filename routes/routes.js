const express = require('express')
const user_route = express();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const userController = require('../controller/userRegister');


user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded( { extended: true}))

user_route.set("view engine", "ejs");
user_route.set('views', path.join(process.cwd(), 'views'))

// To access images
user_route.use(express.static('public'))

// using multer for image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(process.cwd(), "public/images"));
    },
    filename: function(req, file, cb){
        const filename = Date.now() + '-' + file.originalname; 
        cb(null, filename);
    }
})
const upload = multer({storage: storage})

user_route.get('/register', userController.registerLoad)
user_route.post('/register', upload.single('image'), userController.register)



module.exports= user_route;