const express = require('express')
const {Movie, Review} = require('../models')
const moviesRt = express.Router()



// Can accept query parameters
moviesRt.get('/', async (req, res) => {
    //If more than one genre query
    if (Array.isArray(req.query.genre)) {
        const moviesByGenres = await Promise.all(req.query.genre.map((g) =>Movie.findAll({where: {genre: g}})))
        return res.json(moviesByGenres)
    }
    //One query
    if (req.query.genre) {
        const moviesByGenre = await Movie.findAll({where: {genre: req.query.genre}})
        
        return res.json(moviesByGenre)
    }
    //No Query
    const allMovies = await Movie.findAll()
    const getRatings = await Promise.all(allMovies.map((movie)=>{
        return Review.sum('rating', {where: {movieName: movie.name}})
    }))
    let payload = allMovies.map((m, i) => {
        let addRatings = m.toJSON()
        addRatings.score = getRatings[i]
        return addRatings
    })
    
    res.json(payload)
})


moviesRt.get('/:name', async (req,res) => {
    const movie = await Movie.findOne({where: {name: req.params.name}})
    res.json(movie)
})

moviesRt.delete('/:name', async (req, res) => {
    await Movie.destroy({where: {name: req.params.name}})
})

//uses query parameters to update
moviesRt.put('/:name', async (req, res) => {
    const {name, runtime, genre} = req.query
    const movie = await Movie.findOne({where: {name: req.params.name}})
    movie.set({
        name: name || movie.name,
        runtime: runtime || movie.runtime,
        genre: genre || movie.genre,
    })
    await movie.save()
    res.send('Movie has been updated.')
})

module.exports = { moviesRt} 
 