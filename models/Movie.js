const {db}= require('../db/db')
const {DataTypes} = require('sequelize')


let Movie = db.define('movie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    runtime: {
        type: DataTypes.INTEGER
    }
})


module.exports = { Movie}