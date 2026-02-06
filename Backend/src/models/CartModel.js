const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    require:true
  },
  // i will make it later
  items:[{
    productId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"product"
    },
    quantity:{
      type:Number
    },
    price:{
      type:Number
    }
  }],
  totalAmount:{
    type:Number,
    default:0
  }
},{timestamps:true})

module.exports=mongoose.model("cart",cartSchema)