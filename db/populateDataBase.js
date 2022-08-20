const {db} = require('./db')
const {userList, movieList} = require('./seed')
const {User, Movie} = require('../models')


let populateDataBase = async () => {
    await db.sync({force: true})

    await Promise.all(userList.map((u)=> User.create(u)))
    await Promise.all(movieList.map((m) => {Movie.create(m)}))

    const user = await User.findAll()
    const movies = await Movie.findAll()
    
    await Promise.all(user.map((u) => {
        u.addMovie(movies[0], {through: { watch: true}})
        u.addMovie(movies[1], {through: { watch: true}})
        u.addMovie(movies[2], {through: { watch: true}})
    }))



   




}

let buildDB = async () => {
    await populateDataBase()
}

module.exports = {buildDB}
