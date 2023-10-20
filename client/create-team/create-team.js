
const BASE_URL = "http://localhost:3001"

const createTeamBtn = document.getElementById('createTeamBtn')
const saveTeamBtn = document.getElementById('saveTeamBtn')

let formationSelect = document.getElementById('formation-select')
let playerSelect1 = document.getElementById('player1')
let playerSelect2 = document.getElementById('player2')
let playerSelect3 = document.getElementById('player3')
let playerSelect4 = document.getElementById('player4')
let playerSelect5 = document.getElementById('player5')
let playerSelect6 = document.getElementById('player6')
let playerSelect7 = document.getElementById('player7')
let playerSelect8 = document.getElementById('player8')
let playerSelect9 = document.getElementById('player9')
let playerSelect10 = document.getElementById('player10')
let playerSelect11 = document.getElementById('player11')







function getFormationData() {
    axios.get(`${BASE_URL}/formations`).then(
        (response) => {
            let result = response.data
            console.log(result)
            for (let i = 0; i < result.length; i++) {
                let opt = result[i].name;                
                let el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                formationSelect.appendChild(el);
            }
        }
    )
}

function getPlayerData() {
    axios.get(`${BASE_URL}/players`).then(
        (response) => {
            let result = response.data
            console.log(result)
            for (let i = 0; i < result.length; i++) {
                let opt = result[i].name;              
                let el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;

                playerSelect1.appendChild(el);
                playerSelect2.appendChild(el.cloneNode(true));
                playerSelect3.appendChild(el.cloneNode(true));
                playerSelect4.appendChild(el.cloneNode(true));
                playerSelect5.appendChild(el.cloneNode(true));
                playerSelect6.appendChild(el.cloneNode(true));
                playerSelect7.appendChild(el.cloneNode(true)); 
                playerSelect8.appendChild(el.cloneNode(true));
                playerSelect9.appendChild(el.cloneNode(true));
                playerSelect10.appendChild(el.cloneNode(true));
                playerSelect11.appendChild(el.cloneNode(true));
            }
        }
    )
}


getFormationData()
getPlayerData()

createTeamBtn.addEventListener('click', async() => {
    const teamName = document.getElementById('teamNameCreate').value
    const formation = document.getElementById('formation-select').value
    const playerListResponse = await axios.get(`${BASE_URL}/players`)
    let playersArr = []
    let chosenPlayersArr = []

    document.querySelectorAll('.player-select').forEach(player => {
        chosenPlayersArr.push(player.value)
    })

    for (let i = 0; i < playerListResponse.data.length; i++) {
        if (chosenPlayersArr.includes(playerListResponse.data[i].name)) {
            playersArr.push({
                name: playerListResponse.data[i].name,
                position: playerListResponse.data[i].position,
            })
        }
    }


    try {
        const response = await axios.post(`${BASE_URL}/teams`, {
            name: teamName,
            formation: formation,
            players: playersArr
        })
        console.log('Team Created', response.data)
    } catch (error) {
        console.error('Error creating Team', error)
    }
})



