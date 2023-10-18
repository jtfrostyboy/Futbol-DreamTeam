const mongoose = require('mongoose')
const FormationSchema = require('./Formation')
const PlayerSchema = require('./Player')
const TeamSchema = require('./Team')

const Formation = mongoose.model('Formation', FormationSchema)
const Player = mongoose.model('Player', PlayerSchema)
const Team = mongoose.model('Team', TeamSchema)

module.exports = {
  Formation,
  Player,
  Team
}