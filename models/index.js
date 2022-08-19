const {Movie} = require('./Movie')
const {User} = require('./User')
const {Review}= require('./Review')


User.belongsToMany(Movie, {through: Review})
Movie.belongsToMany(User, {through: Review})


module.exports = { Movie, User, Review}