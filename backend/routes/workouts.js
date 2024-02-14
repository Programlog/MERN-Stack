const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', (request, response) => {
    response.json({mssg: "DELETE a new workout"})
})

router.patch('/:id', (request, response) => {
    response.json({mssg: "UPDATE a new workout"})
})

module.exports = router 