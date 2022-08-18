const {db} = require('./db')
const {userList, movieList} = require('./seed')
const {User, Movie} = require('../models')


let populateDataBase = async () => {
    await db.sync({force: true})

    await Promise.all(userList.map((u)=> User.create(u)))
    await Promise.all(movieList.map((m) => {Movie.create(m)}))
}

let buildDB = async () => {
    await populateDataBase()
}

module.exports = {buildDB}