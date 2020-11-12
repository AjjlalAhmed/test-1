// Loading thing we need
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
// Creating app
const app = express();
// Middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
// Importing routes
const getRoutes = require("./Routes/getRoutes");
const postRoutes = require("./Routes/postRoutes");
// Routes middleware
app.use("/", getRoutes);
app.use("/api/", postRoutes);
// Conecting to DB
mongoose.connect(process.env.DB, {useNewUrlParser: true,useUnifiedTopology: true}, () =>{
  console.log("Connected DB");
})
// PORT
const PORT = process.env.PORT;
// Listening to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
