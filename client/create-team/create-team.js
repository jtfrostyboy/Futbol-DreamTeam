
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
                let opt2 = result[i].position;               
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
    let playerSelect1Val = document.getElementById('player1').value
    let playerSelect2Val = document.getElementById('player2').value
    let playerSelect3Val = document.getElementById('player3').value
    let playerSelect4Val = document.getElementById('player4').value
    let playerSelect5Val = document.getElementById('player5').value
    let playerSelect6Val = document.getElementById('player6').value
    let playerSelect7Val = document.getElementById('player7').value
    let playerSelect8Val = document.getElementById('player8').value
    let playerSelect9Val = document.getElementById('player9').value
    let playerSelect10Val = document.getElementById('player10').value
    let playerSelect11Val = document.getElementById('player11').value





    // const players = document.getElementsByClassName('player-select')
    const playersArray = [];

    

    // document.querySelectorAll('.player-select').forEach(async player => {
    await axios.get(`${BASE_URL}/players/${playerSelect1Val}`).then(
            (response) => {
                let result  = response.data
                playersArray.push({
                    name: result.name,
                    position: result.position
                })
            })
    await axios.get(`${BASE_URL}/players/${playerSelect2Val}`).then(
            (response) => {
                let result  = response.data
                playersArray.push({
                    name: result.name,
                    position: result.position
                })
            })
    await axios.get(`${BASE_URL}/players/${playerSelect3Val}`).then(
            (response) => {
                let result  = response.data
                playersArray.push({
                    name: result.name,
                    position: result.position
                })
            })
    await axios.get(`${BASE_URL}/players/${playerSelect4Val}`).then(
            (response) => {
                let result  = response.data
                playersArray.push({
                    name: result.name,
                    position: result.position
                })
            })
    await axios.get(`${BASE_URL}/players/${playerSelect5Val}`).then(
                (response) => {
                    let result  = response.data
                    playersArray.push({
                        name: result.name,
                        position: result.position
                    })
            })
    await axios.get(`${BASE_URL}/players/${playerSelect6Val}`).then(
                (response) => {
                    let result  = response.data
                    playersArray.push({
                        name: result.name,
                        position: result.position
                    })
            })
    await axios.get(`${BASE_URL}/players/${playerSelect7Val}`).then(
                (response) => {
                    let result  = response.data
                    playersArray.push({
                        name: result.name,
                        position: result.position
                    })
            })
    await axios.get(`${BASE_URL}/players/${playerSelect8Val}`).then(
                (response) => {
                    let result  = response.data
                    playersArray.push({
                        name: result.name,
                        position: result.position
                    })
            })
    await axios.get(`${BASE_URL}/players/${playerSelect9Val}`).then(
                (response) => {
                    let result  = response.data
                    playersArray.push({
                        name: result.name,
                        position: result.position
                    })
            })
    await axios.get(`${BASE_URL}/players/${playerSelect10Val}`).then(
                (response) => {
                    let result  = response.data
                    playersArray.push({
                        name: result.name,
                        position: result.position
                    })
            })  
    await axios.get(`${BASE_URL}/players/${playerSelect11Val}`).then(
                (response) => {
                    let result  = response.data
                    playersArray.push({
                        name: result.name,
                        position: result.position
                    })
            })         
    //         }
    //     )})
    try {
        const response1 = await axios.post(`${BASE_URL}/teams`, {
            name: teamName,
            formation: formation,
            players: playersArray
        })
        console.log('Team Created', response1.data)
    } catch (error) {
        console.error('Error creating Team', error)
    }
})



