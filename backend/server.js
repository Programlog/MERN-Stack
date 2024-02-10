require('dotenv').config()

const express = require('express')

// launch and store express app
const app = express()

app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// get routes
app.get("/", (requests, response) => {
    response.json({mssg: "Welcome to my app"})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port!', process.env.PORT)
})