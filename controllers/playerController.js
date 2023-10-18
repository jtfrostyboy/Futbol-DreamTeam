const { Player } = require('../models');

module.exports = {
    getAllPlayers, getOnePlayer
}

async function getAllPlayers(req, res) {
    try {
        const players = await Player.find()
        return res.json(players)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOnePlayer(req, res) {
    try {
        const name = req.params.name;
        const player = await Player.findOne({name: name})
        return res.json(player)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}