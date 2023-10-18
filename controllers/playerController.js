const { Player } = require('../models');

module.exports = {
    getAllPlayers
}

async function getAllPlayers(req, res) {
    try {
        const players = await Player.find()
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOnePlayer(req, res) {
    try {
        const { name } = req.params
        const player = await Player.findOne({name: name})
    } catch (error) {
        return res.status(500).send(error.message);
    }
}