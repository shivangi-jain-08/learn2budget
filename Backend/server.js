const express = require('express');
const cors = require('cors');
const connectToDB = require('./config/dbconnection');
const blogRoute = require('./routes/blogRoute');
const userRoute = require('./routes/userRoute');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();


app.use(cors({
    origin: 'http://localhost:5174',
    methods: 'GET, POST, PATCH, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  }));

app.use(express.json());

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


    app.use("/api/data", blogRoute);
    app.use("/api/users", userRoute);

app.listen(port, () => {
    console.log(`🚀 Server running on PORT: ${port}`);
});