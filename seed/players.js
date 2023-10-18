const db = require('../db');
const { Player } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const playerSeedData = [
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
        name: 'Olivier Giroud',
        position: 'Attacker',
    },
    {
        name: 'Erling Haaland',
        position: 'Attacker',
    },
    {
        name: 'Kareem Benzema',
        position: 'Attacker',
    },
    {
        name: 'Alexander Isak',
        position: 'Attacker',
    },
    {
        name: 'Victor Osimhen',
        position: 'Attacker',
    },
    {
        name: 'Folarin Balogun',
        position: 'Attacker',
    },
    {
        name: 'Christiano Ronaldo',
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
        name: 'Declan Rice',
        position: 'Midfielder',
    },
    {
        name: 'Toni Kroos',
        position: 'Midfielder',
    },
    {
        name: 'Paul Pogba',
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
        name: 'John Stones',
        position: 'Defender',
    },
    {
        name: 'Theo Hernandez',
        position: 'Defender',
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
        name: 'Alisson Becker',
        position: 'Goalkeeper',
    },
    {
        name: 'Manuel Neuer',
        position: 'Goalkeeper',
    },
    {
        name: 'Gianluigi Donnarumma',
        position: 'Goalkeeper',
    },
    {
        name: 'Jan Oblak',
        position: 'Goalkeeper',
    },
    {
        name: 'Mike Maignan',
        position: 'Goalkeeper',
    },
    {
        name: 'Marc-André ter Stegen',
        position: 'Goalkeeper',
    },
    {
        name: 'Hugo Lloris',
        position: 'Goalkeeper',
    },
    {
        name: 'André Onana',
        position: 'Goalkeeper',
    },
    {
        name: 'Thibaut Courtois',
        position: 'Goalkeeper',
    },
    {
        name: 'Édouard Mendy',
        position: 'Goalkeeper',
    }
]