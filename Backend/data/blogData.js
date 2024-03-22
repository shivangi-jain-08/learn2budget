const mongoose = require('mongoose');
const Blog = require('../models/blogModel');
require('dotenv').config({ path: '../.env' });

const dummyBlogs = [
    {
        title: 'Understanding Personal Budgeting',
        tags: ['Budgeting', 'Personal Finance', 'Financial Literacy'],
        author: 'John Doe',
        text: 'In this blog post, we will discuss the importance of personal budgeting and how to create an effective budget plan.'
    },
    {
        title: 'Tips for Saving Money in College',
        tags: ['Saving', 'College Finance', 'Financial Literacy'],
        author: 'Jane Smith',
        text: 'Learn practical tips for saving money while in college, including budgeting strategies and smart spending habits.'
    },
    {
        title: 'Investment Basics for Beginners',
        tags: ['Investing', 'Financial Planning', 'Financial Literacy'],
        author: 'Alice Johnson',
        text: 'Get started with investing by understanding the basic concepts, such as stocks, bonds, and mutual funds.'
    },
    {
        title: 'Managing Debt: Strategies for Debt Repayment',
        tags: ['Debt Management', 'Credit Cards', 'Financial Literacy'],
        author: 'Michael Clark',
        text: 'Discover effective strategies for managing and repaying debt, including debt consolidation and budget adjustments.'
    },
    {
        title: 'The Importance of Emergency Funds',
        tags: ['Emergency Fund', 'Savings', 'Financial Literacy'],
        author: 'Sophia Martinez',
        text: 'Learn why having an emergency fund is crucial for financial stability and how to build and maintain one.'
    },
];

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB database"))
    .catch((error) => console.error("Failed to connect to MongoDB:", error));

async function insertDummyBlogs() {
    try {
        await Blog.insertMany(dummyBlogs, { timeout: 30000 });
        console.log('Dummy blogs inserted successfully.');
    } catch (error) {
        console.error('Error inserting dummy blogs:', error);
    }
}

// insertDummyBlogs();
