const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create schema
const ItemSchema= new Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    },
});

const User=mongoose.model('user',ItemSchema);
module.exports=User;