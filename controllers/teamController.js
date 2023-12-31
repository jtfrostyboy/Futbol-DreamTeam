const { Team } = require('../models');

module.exports = {
    getAllTeams, getOneTeam, createTeam, updateTeam, deleteTeam
}


async function getAllTeams(req, res) {
    try {
        const teams = await Team.find()
        return res.json(teams)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneTeam(req, res) {
    try {
        const name = req.params.name;
        const team = await Team.findOne({name: name})
        return res.json(team)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createTeam(req, res) {
    try {
        const team = await Team.create(req.body)
        return res.status(201).json({
            team
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function updateTeam(req, res) {
    try {
        const id = req.params.name;
        const body_name = req.body.name
        const old_team = await Team.findOne({name: id})
        const team = await Team.findOneAndUpdate(
            {name: id},
            {
                name: body_name,
                formation: old_team.formation,
                players: old_team.players
            }
        )
        if (team) {
            return res.status(200).json(team)
        }
        throw new Error("Team not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteTeam(req, res) {
    try {
        const input = req.params.name;
        const team = await Team.findOneAndDelete({name: input})
        if (team) {
            return res.status(200).send("Team deleted")
        }
        throw new Error("Team not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}