const express = require('express');
const cors = require('cors');
const connectToDB = require('./config/dbconnection');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();


app.get('/ping', (req, res) => {
    res.send("pong");
});

connectToDB()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

app.listen(port, () => {
    console.log(`🚀 Server running on PORT: ${port}`);
});