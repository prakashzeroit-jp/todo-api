# 📝 Todo API (Node.js + MongoDB)

A simple and scalable **Todo API** built using **Node.js, Express, and MongoDB** following the **MVC architecture**. This project demonstrates how to build RESTful APIs with proper structure, validation, and database integration.

---

## 🚀 Features

* Create, Read, Update, Delete (CRUD) Todos
* RESTful API design
* MongoDB database integration using Mongoose
* MVC (Model-View-Controller) architecture
* Clean and scalable folder structure
* Environment variable support
* Error handling middleware

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Tools:** Postman (for API testing)

---

## 📂 Project Structure

```
todo-api/
│
├── controllers/
│   └── todoController.js
│
├── models/
│   └── todoModel.js
│
├── routes/
│   └── todoRoutes.js
│
├── config/
│   └── db.js
│
├── middleware/
│   └── errorMiddleware.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📁 Folder Explanation

### 📌 controllers/

Contains business logic of the application.

* **todoController.js**

  * Handles all API logic like:

    * Create todo
    * Get all todos
    * Get single todo
    * Update todo
    * Delete todo

---

### 📌 models/

Defines MongoDB schema using Mongoose.

* **todoModel.js**

  * Defines structure of Todo:

    * title
    * description
    * status (completed / pending)
    * timestamps

---

### 📌 routes/

Defines API endpoints.

* **todoRoutes.js**

  * Connects routes with controller functions
    Example:

  ```
  GET /api/todos
  POST /api/todos
  PUT /api/todos/:id
  DELETE /api/todos/:id
  ```

---

### 📌 config/

Database connection setup.

* **db.js**

  * Connects Node.js app with MongoDB using Mongoose

---

### 📌 middleware/

Custom middleware functions.

* **errorMiddleware.js**

  * Handles global errors
  * Sends proper response with status codes

---

### 📌 server.js

Main entry point of the application.

* Initializes Express app
* Connects database
* Uses middleware
* Starts server

---

### 📌 .env

Stores environment variables like:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/prakashzeroit-jp/todo-api.git
cd todo-api
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in root:

```
PORT=5000
MONGO_URI=your_mongodb_uri
```

### 4️⃣ Run the server

```
npm start
```

OR (for development)

```
npm run dev
```

---

## 📬 API Endpoints

### 🔹 Create Todo

```
POST /api/todos
```

### 🔹 Get All Todos

```
GET /api/todos
```

### 🔹 Get Single Todo

```
GET /api/todos/:id
```

### 🔹 Update Todo

```
PUT /api/todos/:id
```

### 🔹 Delete Todo

```
DELETE /api/todos/:id
```

---

## 🧪 Testing

Use **Postman** or any API client:

* Set method (GET, POST, etc.)
* Use JSON body for POST/PUT
* Test all endpoints

---

## 📌 Example Request Body

```json
{
  "title": "Learn Node.js",
  "description": "Practice MVC structure",
  "status": "pending"
}
```

---

## ❗ Error Handling

* Proper status codes (200, 400, 404, 500)
* Global error middleware used
* Validation checks included

---

## 📈 Future Improvements

* Add authentication (JWT)
* Add user-based todos
* Pagination & filtering
* Swagger API documentation

---

## 👨‍💻 Author

**Jyoti Prakash**

* GitHub: https://github.com/prakashzeroit-jp

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
