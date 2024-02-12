const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.json({mssg:"GET all workouts"})
})

router.get('/:id', (request, response) => {
    response.json({mssg:"GET single workout"})
})

router.post('/', (request, response) => {
    response.json({mssg: "POST a new workout"})
})

router.delete('/:id', (request, response) => {
    response.json({mssg: "DELETE a new workout"})
})

router.patch('/:id', (request, response) => {
    response.json({mssg: "UPDATE a new workout"})
})

module.exports = router 