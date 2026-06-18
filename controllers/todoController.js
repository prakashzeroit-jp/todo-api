const mongoose = require('mongoose');
const todoModel = require("../models/todoModel");

exports.createTodo = async (req, res) => {
  try {
    const { title, descreption, isCompleted } = req.body;
    if (!title) {
     return res.status(200).json({ success: false, message: "Please provide title" });
    }
    const mycreate = await todoMedel.create({
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
  } catch (error) {
    console.error("Error Here", error.message);
    res.status(500).json({ success: false, message: "invalid credentials!" });
  }
};

exports.getTodo = async (req, res) => {
  try {
    //query param
    const { search, sort, page = 1, limit = 10 } = req.query;
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
    const todos = await todoMedel
      .find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(parseInt(limit));

    const totalTodos = await todoMedel.countDocuments(query);
    return res.status(200).json({
      success: true,
      message: "Todo fetch successfully",
      total: totalTodos,
      page: Number(page),
      limit: Number(limit),
      data: todos,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
