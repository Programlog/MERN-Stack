require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// launch and store express app
const app = express()

// middleware
app.use(express.json())
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// get routes
app.use("/api/workouts", workoutRoutes)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & listening to PORT', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
