const mongoose = require('mongoose');
const ErrorLog = require('../model/ErrorLog');
const EventLog = require('../model/EventLog');

const errorLogger = async (err,req,res,next) =>{
    const message = `${err.name}: ${err.message}`; //req.headers.orgin is the domain making the req
    //to store the new event
    try{
        const errorHandler = await EventLog.create({
            timestamp: dateTime,
            message  
        });
    }catch(err){
        console.error(err);
    }

    console.error(err.stack);
    res.status(500).send(err.message);
}

module.exports = errorLogger;