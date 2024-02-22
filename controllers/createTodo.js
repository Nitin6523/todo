// import the model
const Todo = require("../models/Todo");

//define router handler
exports.createTodo = async(req,res)=>{
    try{
        // extract title and description from body
        const {title,description} = req.body;

        //create a new Todo object and insert in db

        const resposne = await Todo.create({title,description});

        // send a json respose with success flag

        res.status(200).json(
            {
                success : true,
                data: resposne,
                msessage:'Entry created sucessfully'
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