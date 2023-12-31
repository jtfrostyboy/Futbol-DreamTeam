const db = require('../db');
const { Formation } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const formationSeedData = [
    {
        name: '4-3-3' ,
        attackers: 3,
        midfielders: 3,
        defenders: 4,
        goalkeeper: 1
    },
    {
        name: '4-4-2' ,
        attackers: 2,
        midfielders: 4,
        defenders: 4,
        goalkeeper: 1
    },
    {
        name: '3-5-2' ,
        attackers: 2,
        midfielders: 5,
        defenders: 3,
        goalkeeper: 1
    },
    {
        name: '4-5-1',
        attackers: 1,
        midfielders: 5,
        defenders: 4,
        goalkeeper: 1
    },
    {
        name: '5-3-2' ,
        attackers: 2,
        midfielders: 3,
        defenders: 5,
        goalkeeper: 1
    },
]

async function seedFormations() {
    try {
        await Formation.deleteMany({});
        let formation = await Formation.insertMany(formationSeedData);
    } catch (err) {
        console.error('Error seeding formations', err);
    } finally {
        db.close();
    }
}

seedFormations();