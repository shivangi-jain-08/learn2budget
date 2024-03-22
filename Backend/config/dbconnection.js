const mongoose = require('mongoose')
require('dotenv').config()

function connectToDB() {
    return mongoose.connect(process.env.MONGO_URI)
}

module.exports = connectToDB;