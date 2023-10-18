const { Formation } = require('../models');

module.exports = {
    getAllFormations, getOneFormation
}

async function getAllFormations(req, res) {
    try {
        const formations = await Formation.find();
        res.json(formations);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneFormation(req, res) {
    try {
        const { name } = req.params
        const formation = await Formation.findOne({name: name})
    } catch (error) {
        return res.status(500).send(error.message);
    }
}