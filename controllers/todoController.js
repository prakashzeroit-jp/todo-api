const todoMedel = require("../models/todoModel");

exports.createTodo = async (req, res) => {
  try {
    const { tittle, isCompleted } = req.body;
    const mycreate = await todoMedel.create({
      tittle: tittle,
      isCompleted: isCompleted,
    });
    res.status(200).json({
      success: true,
      message: "todo created succssfully!",
      data: mycreate,
    });
  } catch (error) {
    console.error("Error Here", error.message);
    res.status(500).json({ success: false, message: "invalid credentials!" });
  }
};
