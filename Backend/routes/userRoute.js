const express = require('express');
const { getAllUsers, createUser, updateUser, getSingleUser, deleteUser } = require('../handlers/userHandler');

// Create an instance of router
const userRoute = express.Router();

// Get all users
userRoute.get("/", getAllUsers);

// Create a user
userRoute.post("/", createUser);

// Update a user
userRoute.put("/:id", updateUser);

// Get a single user
userRoute.get("/:id", getSingleUser);

// Delete a user
userRoute.delete("/:id", deleteUser);

module.exports = userRoute;
