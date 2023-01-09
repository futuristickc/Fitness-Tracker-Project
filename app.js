require("dotenv").config()
const express = require("express")
const app = express()
const cors = require('cors');
const router = require('./api');
const morgan = require('morgan');
const client = require('./db/client');
// const { application } = require("express");
client.connect();


// Setup your Middleware and API Router here
// client.connect();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);


app.get('*', (req, res) => {
    res.status(404).send({ error: '404 - Not Found', message: 'No route found for the requested URL' });
});

// error handling middleware
app.use((error, req, res, next) =>{
    res.send({
        message: error.message,
        name: error.name,
        error: error.message
    })
})


module.exports = app;
