//setting package
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config');


//connect database
mongoose.connect(config.url);


//plugins
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())


//import routes
const routes = require('./Routes/api');
//routes
app.use('/api',routes)



//error handling page / middleware
app.use((req,res,next) => {
    const err = new Error('not found')
    err.status = 404
    next(err)
})
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message
        }
    })
})

module.exports = app
