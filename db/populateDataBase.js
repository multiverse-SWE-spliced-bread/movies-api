const {db} = require('./db')
const {userList, movieList} = require('./seed')
const {User, Movie} = require('../models')


let populateDataBase = async () => {
    await db.sync({force: true})

    await Promise.all(userList.map((u)=> User.create(u)))
    await Promise.all(movieList.map((m) => {Movie.create(m)}))

    const user = await User.findByPk(1)
    const movies = await Movie.findAll()
    
    user.addMovie(movies[0], {through: { watch: true}})
    user.addMovie(movies[1], {through: { watch: true}})
    user.addMovie(movies[2], {through: { watch: true}})




}

let buildDB = async () => {
    await populateDataBase()
}

module.exports = {buildDB}
