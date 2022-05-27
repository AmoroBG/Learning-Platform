// REQUIRE PACKAGES
const express = require('express')
const path = require('path')

// INTERNAL MODULES
const config=require('./config')
const dbconnect = require("./dbconnection")
const userRoutes=require("./routes/user")
const taskRoutes=require("./routes/course")

// LOAD CONFIG
const dotenv = require('dotenv')
dotenv.config()

// INITIALIZE APP
const app = express()
// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

// DB CONNECTION
dbconnect

// MIDDLEWARE
// EJS
app.set('view engine', 'ejs');
// body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ROUTES
app.get("/", function(req, res){
  res.render("index")
})
app.use("/users", userRoutes)
app.use("/tasks", taskRoutes)

// 404 ERROR Page
app.use(function(req, res) {
  res.send("<h1>404: Page not found</h1>")
})
// SERVER
const PORT = config.port
app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`)
})
