const express = require("express");
const router = express.Router();

// import controller
const {createTodo}=require("../controllers/createTodo");
const {getTodo,getTodobyId}=require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodos} =require("../controllers/deleteTodo");


// define api routes

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodobyId);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodos/:id",deleteTodos);

module.exports=router;