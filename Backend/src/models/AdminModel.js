const mongoose=require("mongoose");

const adminSchema=new mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    minlength:8,
    require:true
  },
  role:{
    type:String,
    default:"admin"
  }
},{timestamps:true})

module.exports=mongoose.model("admin",adminSchema)