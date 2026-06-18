const mongoose = require("mongoose");
const todoModel = require("../models/todoModel");
const {asyncHandler} = require('../middlewares/asyncHandler');

exports.createTodo = asyncHandler(async (req, res) => {
    const { title, descreption, isCompleted } = req.body;
    if (!title) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide title" });
    }
    const mycreate = await todoModel.create({
      title: title,
      descreption: descreption,
      isCompleted: isCompleted,
    });
    res.status(200).json({
      success: true,
      descreption,
      message: "todo created succssfully!",
      data: mycreate,
    });
 
});

exports.getTodo = asyncHandler(async (req, res) => {
 
    //query param
    const { search, sort, page = 1, limit = 30 } = req.query;
    //base query
    let query = {};
    //serach for title
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    //sorting
    let sortOption = {};
    if (sort === "asc") sortOption.createdAt = 1;
    else sortOption.createAt = -1;
    //pagination
    const skip = (page - 1) * limit;
    const todos = await todoModel
      .find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(parseInt(limit));

    const totalTodos = await todoModel.countDocuments(query);
    return res.status(200).json({
      success: true,
      message: "Todo fetch successfully",
      total: totalTodos,
      page: Number(page),
      limit: Number(limit),
      data: todos,
    });
  
});

exports.updateTodo = asyncHandler(async (req, res) => {
 
    const { id } = req.params;

    const { title, descreption } = req.body;

    // validate id based on mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid todo ID",
      });
    }
    //valid input
    if (!title || title === "") {
      return res
        .status(400)
        .json({ success: false, message: "title is required" });
    }

    // update todo
    const todo = await todoModel.findByIdAndUpdate(
      id,

      { title, descreption },
      { new: true, runValidators: true },
    );

    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo Not found" });
    }

    res.status(200).json({
      success: true,

      message: "title updated succfully!",
      data: todo,
    });

});

exports.deleteTodo = asyncHandler(async (req, res) => {
 
    const { id } = req.params;
    //validate Id  based on mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid todo ID" });
    }

    //delete todo
    const todo = await todoModel.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "todo not found",
      });
    }

    return res
      .status(200)
      .json({
        success: false,
        message: "todo deleted successfully",
        data: todo,
      });

});
