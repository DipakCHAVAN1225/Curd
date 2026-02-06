const mongoose=require("mongoose");

const deliverySchema=new mongoose.Schema({
  orderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"order",
    require:true
  },
  deliveryStatus:{
    type:String,
    enum:["placed","packed","out_for_delivery","delivered"],
    default:"placed"
  },
  expectedDeliveryDate:{
    type:Date,

  },

},{timestamps:true})


module.exports=mongoose.model("delivery",deliverySchema)