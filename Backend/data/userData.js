const mongoose = require('mongoose')
const User = require('../models/userModel')
require('dotenv').config({ path: '../.env' })


const dummyUsers = [
    {
        userName: 'user1',
        name: 'John Doe',
        budgets: [
            { title: 'Food', amount: 200 },
            { title: 'Transportation', amount: 100 },
        ],
        expenses: [
            { category: 'Food', title: 'Lunch', amount: 10, date: new Date('2024-03-23') },
            { category: 'Transportation', title: 'Bus Fare', amount: 5, date: new Date('2024-03-23') },
        ],
        profileImg: 'path/to/profileImage1.jpg'
    },
    {
        userName: 'user2',
        name: 'Jane Smith',
        budgets: [
            { title: 'Entertainment', amount: 150 },
            { title: 'Shopping', amount: 100 },
        ],
        expenses: [
            { category: 'Entertainment', title: 'Movie Tickets', amount: 20, date: new Date('2024-03-22') },
            { category: 'Shopping', title: 'Clothing', amount: 50, date: new Date('2024-03-22') },
        ],
        profileImg: 'path/to/profileImage2.jpg'
    },
    {
        userName: 'user3',
        name: 'Alice Johnson',
        budgets: [
            { title: 'Groceries', amount: 300 },
            { title: 'Dining Out', amount: 200 },
        ],
        expenses: [
            { category: 'Groceries', title: 'Weekly groceries', amount: 50, date: new Date('2024-03-21') },
            { category: 'Dining Out', title: 'Dinner with friends', amount: 30, date: new Date('2024-03-22') },
        ],
        profileImg: 'path/to/profileImage3.jpg'
    },
    {
        userName: 'user4',
        name: 'Bob Brown',
        budgets: [
            { title: 'Travel', amount: 500 },
            { title: 'Utilities', amount: 150 },
        ],
        expenses: [
            { category: 'Travel', title: 'Flight tickets', amount: 300, date: new Date('2024-03-20') },
            { category: 'Utilities', title: 'Electricity bill', amount: 100, date: new Date('2024-03-23') },
        ],
        profileImg: 'path/to/profileImage4.jpg'
    },
    {
        userName: 'user5',
        name: 'Emily Wilson',
        budgets: [
            { title: 'Healthcare', amount: 100 },
            { title: 'Fitness', amount: 50 },
        ],
        expenses: [
            { category: 'Healthcare', title: 'Medication', amount: 30, date: new Date('2024-03-19') },
            { category: 'Fitness', title: 'Gym membership', amount: 30, date: new Date('2024-03-21') },
        ],
        profileImg: 'path/to/profileImage5.jpg'
    },
    {
        userName: 'user6',
        name: 'Michael Clark',
        budgets: [
            { title: 'Education', amount: 200 },
            { title: 'Books', amount: 50 },
        ],
        expenses: [
            { category: 'Education', title: 'Course fee', amount: 150, date: new Date('2024-03-18') },
            { category: 'Books', title: 'Textbooks', amount: 30, date: new Date('2024-03-20') },
        ],
        profileImg: 'path/to/profileImage6.jpg'
    },
    {
        userName: 'user7',
        name: 'Sophia Martinez',
        budgets: [
            { title: 'Rent', amount: 800 },
            { title: 'Utilities', amount: 100 },
        ],
        expenses: [
            { category: 'Rent', title: 'Monthly rent', amount: 800, date: new Date('2024-03-01') },
            { category: 'Utilities', title: 'Water bill', amount: 50, date: new Date('2024-03-20') },
        ],
        profileImg: 'path/to/profileImage7.jpg'
    },
    {
        userName: 'user8',
        name: 'Daniel Taylor',
        budgets: [
            { title: 'Entertainment', amount: 100 },
            { title: 'Dining Out', amount: 150 },
        ],
        expenses: [
            { category: 'Entertainment', title: 'Concert tickets', amount: 50, date: new Date('2024-03-17') },
            { category: 'Dining Out', title: 'Date night', amount: 100, date: new Date('2024-03-19') },
        ],
        profileImg: 'path/to/profileImage8.jpg'
    },
    {
        userName: 'user9',
        name: 'Olivia Anderson',
        budgets: [
            { title: 'Travel', amount: 300 },
            { title: 'Shopping', amount: 200 },
        ],
        expenses: [
            { category: 'Travel', title: 'Train tickets', amount: 100, date: new Date('2024-03-15') },
            { category: 'Shopping', title: 'Electronics', amount: 150, date: new Date('2024-03-18') },
        ],
        profileImg: 'path/to/profileImage9.jpg'
    },
    {
        userName: 'user10',
        name: 'David Rodriguez',
        budgets: [
            { title: 'Groceries', amount: 200 },
            { title: 'Utilities', amount: 100 },
        ],
        expenses: [
            { category: 'Groceries', title: 'Weekly groceries', amount: 50, date: new Date('2024-03-21') },
            { category: 'Utilities', title: 'Electricity bill', amount: 50, date: new Date('2024-03-23') },
        ],
        profileImg: 'path/to/profileImage10.jpg'
    }
];

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB database"))
    .catch((error) => console.error("Failed to connect to MongoDB:", error));


async function insertDummyUsers() {
    try {
        await User.insertMany(dummyUsers, { timeout: 30000 });
        console.log('Dummy users inserted successfully.');
    } catch (error) {
        console.error('Error inserting dummy users:', error);
    }
}

// insertDummyUsers();
