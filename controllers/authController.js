const mongoose = require("mongoose");
const authModel = require("../models/authModel");

exports.register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All  fields required!" });
    }
    const userExist = await authModel.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "user  is  already exist" });
    }

    const user = await authModel.create({
      userName: userName,
      email: email,
      password: password,
    });

    res.status(201).json({
      success: true,
      message: "user Register successfully!",
      data: {
        id: user._id,
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error !",
    });
  }
};
