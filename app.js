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
client.connect();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);



module.exports = app;
