const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    require:true,
    trim:true
  },
  email:{
    type:String,
    require:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    require:true,
    minlength:8,
    select:false
  },
  phone:{
    type:String,
    require:true,
  },
  address:{
    type:String,
    require:true
  },
  role:{
    type:String,
    enum:["user"],
    default:"user"
  }
},{timestamps:true})

module.exports=mongoose.model("user",userSchema);

