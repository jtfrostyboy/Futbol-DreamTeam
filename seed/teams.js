const db = require('../db');
const { Team } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const seedTeams = async () => {
    const teamSeedData = [
        {
            name: 'Team 1',
            formation: '4-3-3',
            players: [
                {
                    name: 'Zlatan Ibrahimovic',
                    position: 'Attacker',
                },
                {
                    name: 'Christian Pulisic',
                    position: 'Attacker',
                },
                {
                    name: 'Rafael Leao',
                    position: 'Attacker',
                },
                {
                    name: 'Jude Bellingham',
                    position: 'Midfielder',
                },
                {
                    name: 'Luka Modric',
                    position: 'Midfielder',
                },
                {
                    name: 'Lionel Messi',
                    position: 'Midfielder',
                },
                {
                    name: 'Virgil van Dijk',
                    position: 'Defender',
                },
                {
                    name: 'David Alaba',
                    position: 'Defender',
                },
                {
                    name: 'Eder Militao',
                    position: 'Defender',
                },
                {
                    name: 'Antonio Rudiger',
                    position: 'Defender',
                },
                {
                    name: 'Mike Maignan',
                    position: 'Goalkeeper',
                }
            ]
        },
        {
            name: 'Team 2',
            formation: '4-4-2',
            players: [
                {
                    name: 'Victor Osimhen',
                    position: 'Attacker',
                },
                {
                    name: 'Folarin Balogun',
                    position: 'Attacker',
                },
                {
                    name: 'Kevin De Bruyne',
                    position: 'Midfielder',
                },
                {
                    name: 'Joshua Kimmich',
                    position: 'Midfielder',
                },
                {
                    name: 'Frenkie de Jong',
                    position: 'Midfielder',
                },
                {
                    name: 'James Maddison',
                    position: 'Midfielder',
                },
                {
                    name: 'Achraf Hakimi',
                    position: 'Defender',
                },
                {
                    name: 'Joao Cancelo',
                    position: 'Defender',
                },
                {
                    name: 'Ronald Araujo',
                    position: 'Defender',
                },
                {
                    name: 'Ruben Dias',
                    position: 'Defender',
                },
                {
                    name: 'Gianluigi Donnarumma',
                    position: 'Goalkeeper',
                }
            ]
        }
    ]
    await Team.insertMany(teamSeedData)
    console.log('teams added')
}

async function run() {
    await seedTeams()
    db.close()
}

run()