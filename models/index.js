const {Movie} = require('./Movie')
const {User} = require('./User')

User.belongsToMany(Movie, {through: "reviews"})
Movie.belongsToMany(User, {through: "reviews"})


module.exports = { Movie, User}