const {db}= require('../db/db')
const {DataTypes} = require('sequelize')


let User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
})


module.exports = { User}