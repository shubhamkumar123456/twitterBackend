const mongoose = require('mongoose');
require('dotenv').config()

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('mongodb is connected successfully'))
    .catch(()=>console.log('error in connection mongodb'))
}

module.exports = connectToDB

