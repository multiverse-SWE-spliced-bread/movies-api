const express = require('express')
const {User, Movie, Review} = require('../models')
const usersRt = express.Router()

usersRt.get('/', async (req, res) => {
    const allUsers = await User.findAll()
    res.json(allUsers)
})

usersRt.get('/:name', async (req, res) => {
    const user = await User.findOne({where: {name: req.params.name}})
    res.json(user)
})

usersRt.get('/:name/watched', async (req, res) => {
    const user = await User.findOne({where: {name: req.params.name}})
    const watched = await user.getMovies()
    res.json(watched)
})

usersRt.post('/:name/watched', async (req, res) => {
    const user = await User.findOne({where: {name: req.params.name}})
    // const newMovie = await Movie.create(req.body)
    //joins new movie to user in Review Join Table
    await user.createMovie(req.body, {through: { watch: true}})
    res.send(`${req.body.name} added to ${req.params.name}'s watched list.`)
})


//works with query parameters to update ratings or watch columns on Review table
usersRt.put('/:name/:title', async (req, res) => {
    const review = await Review.findOne({where: {userName: req.params.name, movieName: req.params.title}})
    if (req.query.rating){
        review.rating = req.query.rating
        review.save()
    }
    

    res.sendStatus(200) 
})

 
module.exports = { usersRt}