const mongoose = require('mongoose');
const userSchmea = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },

})

userSchmea.add({

    resetToken:{
        type:String,
        default:""
    },
    
})

module.exports = mongoose.model('users' ,userSchmea);

