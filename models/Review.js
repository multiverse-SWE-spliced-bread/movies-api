const {db}= require('../db/db')
const {DataTypes} = require('sequelize')


let Review = db.define('review', {
    watch: {
        type: DataTypes.BOOLEAN
    },
    rating: {
        type: DataTypes.FLOAT
    }
})


module.exports = { Review }