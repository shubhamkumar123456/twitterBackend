const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect('mongodb://localhost:27017/blogssss')
    .then(() => console.log('mongodb is connected successfully'))
    .catch(()=>console.log('error in connection mongodb'))
}

module.exports = connectToDB

