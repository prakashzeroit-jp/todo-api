const todoController = require("../controllers/todoController");
const { protect } = require("../middlewares/authMiddlware");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Todo created successfully
 */
router.post("/", protect, todoController.createTodo);
/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all todos
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/",protect, todoController.getTodo);
/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update a todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put("/:id",protect ,todoController.updateTodo);
/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.delete("/:id", protect ,todoController.deleteTodo);
module.exports = router;
