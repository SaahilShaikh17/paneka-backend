//Server.js
require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection');
const logger = require('./middleware/eventLogger');
const errorLogger = require('./middleware/errorLogger');

const PORT = process.env.PORT || 1337;

//Connecting to Database
connectDB();
//Built in middleare to handle urlencoded data, a.k.a, form daya
// 'content-type: application/x-www=form-urlencoded'
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//Custom middleware for event logging
app.use(logger);

//routes
app.use('/register',require('./routes/register'));

app.use(errorLogger);

mongoose.connection.once('open',() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
});