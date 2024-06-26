//Server.js
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const verifyJWT = require('./middleware/verifyJWT');
const connectDB = require('./config/dbConnection');
const logger = require('./middleware/eventLogger');
const errorLogger = require('./middleware/errorLogger');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials')

const PORT = process.env.PORT || 1337;

//Connecting to Database
connectDB();

//Handle options credientials check - before CORS!
//and fetch cookies credentials requirement
app.use(credentials);
app.use(cors({ origin: '*' }));


//Built in middleare to handle urlencoded data, a.k.a, form daya
// 'content-type: application/x-www=form-urlencoded'
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieParser());

//Custom middleware for event logging
app.use(logger);

//routes
app.use('/register',require('./routes/register'));
app.use('/users',require('./routes/userRoutes'));
app.use('/login',require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use(verifyJWT);
app.use('/posts',require('./routes/postRoutes'));
app.use('/comments',require('./routes/commentRoute'));

app.use(errorLogger);

mongoose.connection.once('open',() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
});