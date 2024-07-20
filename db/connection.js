const mongoose = require('mongoose');
const uri = process.env.DB_Connection;

async function Connection(){
try{
    const connect =   await mongoose.connect(uri);

  if(connect){
    console.log('Connect Sucessfully!');
  }

}
  catch(error){
    console.log(`There is an error: ${error}`)
  }
}


module.exports={Connection}