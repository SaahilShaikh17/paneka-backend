const mongoose = require('mongoose');
const ErrorLog = require('../model/ErrorLog');
const EventLog = require('../model/EventLog');

const errorLogger = async (err, req, res, next) => {
    const message = `${err.name}: ${err.message}`;

    try {
        //Store the current timestamp
        const timestamp = new Date();

        // Create the event log entry
        const errorHandler = await EventLog.create({
            timestamp,
            message
        });

        console.error(err.stack);
        res.status(500).send(err.message);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = errorLogger;
