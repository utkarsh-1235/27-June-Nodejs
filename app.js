require('dotenv').config();
const express = require('express');
const connectTodb = require('./config/db');

const cors = require('cors')
const app = express();

const userRoutes = require('./Routes/userRout.js')

// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

//init connection
connectTodb();
app.use('/',userRoutes)

module.exports = app;