const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  // i will make it later
  orderItems:[{
    product:{
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
    require:true
  },
  paymentStatus:{
    type:String,
    enum:["pending","paid","failed"],
    default:"pending"
  },
  orderStatus:{
    type:String,
    enum:["placed","processing","delivered"],
  },
  deliveryAddress:{
    type:String,
    require:True
  }

},{timestamps:true})

module.exports=mongoose.model("order",orderSchema)