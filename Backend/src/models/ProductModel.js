const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
  name:{
    Type:String,
    require:true
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category",
    require:true
  },
  price:{
    type:Number,
    require:true
  },
  quantity:{
    type:String,
    require:true
  },
  stock:{
    type:Number,
    default:0
  },
  description:{
    type:String
  },
  imageURL:{
    type:String,
    require:true
  },
  isAvailable:{
    type:Boolean,
  }
},{timestamps:true})

module.exports= mongoose.model("product",productSchema)