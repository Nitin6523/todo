// import the model
const Todo = require("../models/Todo");

//define router handler

exports.getTodo = async(req,res)=>{
    try{
        // fetch all todo items from data base
        const todos = await Todo.find({});

        res.status(200).json(
            {
                success : true,
                data: todos,
                msessage:'All todo data feteched sucessfully',
            }
        );

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

exports.getTodobyId = async(req,res)=>{
    try{
        // fetch id
        const id = req.params.id;
        
        // fetch data of given id
        const todo = await Todo.findById({_id:id});

        // data for given id is not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found for the given id",
            })
        }

        // data found
        res.status(200).json(
            {
                success : true,
                data: todo,
                msessage:`todo ${id} data sucessfully feteched`,
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}