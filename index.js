const express = require('express');
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middle to parse json request body
app.use(express.json());

// imports routes for todo api
const todoRoutes = require("./routes/todos")

// mount routes for TODO api
app.use("/api/v1",todoRoutes);


app.listen(PORT,()=>{
    console.log(`App is started successfuly at port no ${PORT}`);
});

// connect to database
const dbConnect = require("./config/database");
dbConnect();

// default Route
app.get("/",(req,res)=>{
    res.send(`<h1> This is HomePage</h1>`);
})