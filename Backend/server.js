require('dotenv').config({ path: ['.env.local', '.env'] });

const express = require("express");
const connectDB = require("./src/db/database");

const app = express();
const PORT = 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
