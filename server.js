//Server.js
require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection');

const PORT = process.env.PORT || 1337;

//Connecting to Database
connectDB();

mongoose.connection.once('open',() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
})