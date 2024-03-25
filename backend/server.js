require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const allroutes = require('./routes/allrouter');
// express app
const app = express();

// middleware
app.use(express.json());

app.use(function (req, res, next) {
    next()
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening to port ', process.env.PORT);
        })
    })
    .catch((err) => console.error(err));



app.use('/api/routes', allroutes)

