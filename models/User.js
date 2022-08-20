const {db}= require('../db/db')
const {DataTypes} = require('sequelize')


let User = db.define('user', {
    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING
    }
})


module.exports = { User}