const User = require("../models/userModel");

// Importing necessary modules
const User = require("../models/userModel");

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json({ allUsers });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Error fetching users" });
    }
};

// Create a user
const createUser = async (req, res) => {
    try {
        const body = req.body;
        const userData = await User.create(body);
        res.status(201).json({ message: "User created", data: userData });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user" });
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated", data: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Error updating user" });
    }
};

// Get a single user
const getSingleUser = async (req, res) => {
    try {
        const singleUser = await User.findById(req.params.id);
        if (!singleUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ singleUser });
    } catch (error) {
        console.error("Error fetching single user:", error);
        res.status(500).json({ message: "Error fetching single user" });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Error deleting user" });
    }
};

// Export handler functions
module.exports = { getAllUsers, createUser, updateUser, getSingleUser, deleteUser };
