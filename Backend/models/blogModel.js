const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    tags: { type: Array },
    author: { type: String, required: true },
    text: { type: String, required: true },
})

module.exports = mongoose.model("blogs", BlogSchema);