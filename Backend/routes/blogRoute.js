const express = require('express');
const { getAllBlogs, createBlog, updateBlog, getSingleBlog, deleteBlog } = require('../handlers/blogHandler');

// Create an instance of router
const blogRoute = express.Router();

// Get all blogs
blogRoute.get("/", getAllBlogs);

// Create a blog
blogRoute.post("/", createBlog);

// Update a blog
blogRoute.put("/:id", updateBlog);

// Get a single blog
blogRoute.get("/:id", getSingleBlog);

// Delete a blog
blogRoute.delete("/:id", deleteBlog);

module.exports = blogRoute;
