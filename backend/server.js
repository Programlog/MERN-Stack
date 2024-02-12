require('dotenv').config()

const express = require('express')

const workoutRoutes = require('./routes/workouts')

// launch and store express app
const app = express()

app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// get routes
app.use(workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port!', process.env.PORT)
})