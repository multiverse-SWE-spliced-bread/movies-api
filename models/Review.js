const {db}= require('../db/db')
const {DataTypes} = require('sequelize')


let Review = db.define('review', {
    watch: {
        type: DataTypes.BOOLEAN
    },
    rating: {
        type: DataTypes.FLOAT,
        // defaultValue: () => (Math.random()*10).toFixed(1),
        defaultValue: 10
    }
})


module.exports = { Review }