const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

router.get('/', (request, response) => {
    response.json({mssg:"GET all workouts"})
})

router.get('/:id', (request, response) => {
    response.json({mssg:"GET single workout"})
})

router.post('/', async (request, response) => {
    const {title, load, reps} = request.body
    try {
        const workout = await Workout.create({title, load, reps})
        response.status(200).json(workout)
    } catch(error) {
        response.status(400).json({error: error.message})
    }
})

router.delete('/:id', (request, response) => {
    response.json({mssg: "DELETE a new workout"})
})

router.patch('/:id', (request, response) => {
    response.json({mssg: "UPDATE a new workout"})
})

module.exports = router 