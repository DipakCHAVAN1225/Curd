const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = require("../../constant");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("Mongo DB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
