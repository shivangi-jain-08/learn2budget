const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    budgets: { type: Array },
    expenses: { type: Array },
    profileImg: { type: String }
});

module.exports = mongoose.model("Users", userSchema);
