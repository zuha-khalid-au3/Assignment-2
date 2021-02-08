const mongoose =require('mongoose');
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        trim:true,
        required:true,
        maxLength:32,
        text:true
    },
    slug:{
        type: String,
        unique:true,
        lowercase:true,
        index:true,
    },
    description:{
        type: String,
        required:true,
        maxLength:2000,
        text:true
    },
    price:{
        type: Number,
        trim:true,
        required:true,
        maxLength:32,
    },  
},
  {timestamps: true}
  );

  module.exports = mongoose.model('Product',productSchema);