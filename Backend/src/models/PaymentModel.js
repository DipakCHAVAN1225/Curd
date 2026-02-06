const mongoose=require("mongoose")

const paymentSchema=new mongoose.Schema({
  orderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"order",
    require:true
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    require:true
  },
  paymentStatus:{
    type:String,
    enum:["success","failed","pending"],
    default:"pending"
  },
  paymentMethod:{
    type:String,
    enum:["UPI","Card","Net Banking","Cash"]
  },
  transactionId:{
    type:String,
    require:true
  },
  amount:{
    type:Number,
    require:true
  },
  paymentDate:{
    type:Date,
    default:Date.now
  }


},{timestamps:true})

module.exports=mongoose.model("payment",paymentSchema)