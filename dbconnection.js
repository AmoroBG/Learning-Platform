const mongoose = require('mongoose')
const config=require('./config')
// Connecting to Database
const dbconnect = mongoose
  .connect(config.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log('Successfully connected to db')
  })
  .catch(function (err) {
    console.log('Database connection failed: ', err)
  })

module.exports = dbconnect
