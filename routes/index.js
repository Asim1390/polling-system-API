const express = require('express')
const Router = express.Router()

// this is the entry point of all the api named url's
console.log("routes loaded")
Router.use('/api', require('./api/index.js'));

module.exports = Router