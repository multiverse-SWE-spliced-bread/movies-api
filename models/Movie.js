const {db}= require('../db/db')
const {DataTypes} = require('sequelize')
const { Review } = require('./Review')


let Movie = db.define('movie', {
    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    runtime: {
        type: DataTypes.INTEGER
    },
    genre: {
        type: DataTypes.STRING
    }
})


module.exports = { Movie}