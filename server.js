const express = require('express');
const cors = require('cors');
const db = require('./db');
const morgan = require("morgan");
const bodyParser = require('body-parser');

const formationController = require('./controllers/formationController')
const playerController = require('./controllers/playerController')
const teamController = require('./controllers/teamController')

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Formations
app.get('/formations', formationController.getAllFormations)
app.get('/formations/:name', formationController.getOneFormation)





// Players
app.get('/players', playerController.getAllPlayers)
app.get('/players/:name', playerController.getOnePlayer)




// Teams
app.get('/teams', teamController.getAllTeams)
app.get('/teams/:name', teamController.getOneTeam)
app.post('/teams', teamController.createTeam)
app.put('/teams/:name', teamController.updateTeam)
app.delete('/teams/:name', teamController.deleteTeam)


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })