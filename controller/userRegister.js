const bcrypt = require('bcrypt')
const User = require('../model/userModel/userModel');


const registerLoad = async(req, resp)=>{
    try{
        
        resp.render('register')

    }catch(error){
        console.log(`There is an ${error}`)
    }
}

const register = async(req, resp)=>{
    try{

        const passwordHash = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            image: 'images/'+ req.file.filename,
            password: passwordHash
        });
        await user.save();
        resp.render('register', {message: 'registered sucessfully'})

    }catch(error){
        console.log(`There is an ${error}`)
    }
}

module.exports={
    registerLoad,
    register
}