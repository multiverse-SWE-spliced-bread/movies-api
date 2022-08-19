const express = require('express')
const {Users, User} = require('../models')
const usersRt = express.Router()

usersRt.get('/', async (req, res) => {
    const allUsers = await User.findAll()
    res.json(allUsers)
})

usersRt.get('/:name', async (req, res) => {
    const user = await User.findOne({where: {name: req.params.name}})
    res.json(user)
})

module.exports = { usersRt}