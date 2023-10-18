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
        const id = req.params.id;
        const team = await Team.findByIdAndUpdate(id, req.body, {new: true})
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
        const id = req.params.id;
        const team = await Team.findByIdAndDelete(id)
        if (team) {
            return res.status(200).send("Team deleted")
        }
        throw new Error("Team not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}