const mongoose=require("mongoose")

const reviewSchema=new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"product"
  },
  rating:{
    type:Number,
    min:1,
    max:5
  },
  comment:{
    type:String
  }
},{timestamps:true})

module.exports=mongoose.model("review",reviewSchema)