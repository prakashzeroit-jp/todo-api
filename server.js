require("dotenv").config();
const express = require("express");
const app = express();
const todoroute = require("./routes/todoRoute");
const todoController = require("./controllers/todoController");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
app.use(express.json());
connectDB();    

app.use("/api/create", todoroute); 
app.use("/api/get",todoroute);
app.use("/api/todos",todoroute);
app.use("/api/delete",todoroute);
app.listen(PORT, () => {
  console.log(`Server run at : ${PORT}`);
});
