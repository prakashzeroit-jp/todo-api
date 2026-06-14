const todoController = require("../controllers/todoController");
const express = require("express");
const router = express.Router();

router.post("/", todoController.createTodo);

module.exports = router;
