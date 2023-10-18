const mongoose = require('mongoose')
const FormationSchema = require('./formation')
const PlayerSchema = require('./player')
const TeamSchema = require('./team')

const Formation = mongoose.model('Formation', FormationSchema)
const Player = mongoose.model('Player', PlayerSchema)
const Team = mongoose.model('Team', TeamSchema)

module.exports = {
  Formation,
  Player,
  Team
}