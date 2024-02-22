// import the model
const Todo = require("../models/Todo");

//define router handler
exports.deleteTodos = async(req, res) => {
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.json(
            {
                success: true,
                msessage: "Todo deleted !!",
            }
        );
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
                success: false,
                data: "internal server error",
                message: err.message,
            });
    }
}