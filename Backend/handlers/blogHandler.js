const Blog = require("../models/blogModel");


// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find({});
        res.status(200).json({ allBlogs });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: "Error fetching blogs" });
    }
};

// Create a blog
const createBlog = async (req, res) => {
    try {
        const body = req.body;
        const postData = await Blog.create(body);
        res.status(201).json({ message: "Blog Created", data: postData });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ message: "Error creating blog" });
    }
};

// Update a blog
const updateBlog = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ message: "Blog updated", data: updatedBlog });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ message: "Error updating blog" });
    }
};

// Get a single blog
const getSingleBlog = async (req, res) => {
    try {
        const singleBlog = await Blog.findById(req.params.id);
        if (!singleBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ singleBlog });
    } catch (error) {
        console.error("Error fetching single blog:", error);
        res.status(500).json({ message: "Error fetching single blog" });
    }
};

// Delete a blog
const deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ message: "Blog deleted" });
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({ message: "Error deleting blog" });
    }
};

// Patch a blog
const patchBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const updates = req.body;

        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Apply partial updates to the blog object
        for (const key in updates) {
            if (updates.hasOwnProperty(key)) {
                blog[key] = updates[key];
            }
        }

        const patchedBlog = await blog.save();
        res.status(200).json({ message: "Blog patched", data: patchedBlog });
    } catch (error) {
        console.error("Error patching blog:", error);
        res.status(500).json({ message: "Error patching blog" });
    }
};

// Export handler functions
module.exports = { getAllBlogs, createBlog, updateBlog, getSingleBlog, deleteBlog };