

const BASE_URL = "http://localhost:3001";

let teamsInventoryStr = "";
const teamsInventory = document.getElementById("team-container")
const upAndDel = document.getElementById('teamUaD')
const deleteBtn = document.getElementById('deleteBtn')

function getTeamData() {
    axios.get(`${BASE_URL}/teams`).then(
        (response) => {
            let result = response.data
            console.log(result)
            for (let i = 0; i < result.length; i++) {
                let opt = result[i].name;              
                let el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                upAndDel.appendChild(el);
            }
        }
    )
}
getTeamData()

deleteBtn.addEventListener('click', async() => {
    const deleteAction = await axios.delete(`${BASE_URL}/teams/${upAndDel.value}`)
})

async function inventoryPopulate(){
    let teams = await axios.get(`${BASE_URL}/teams`);
    console.log(teams);
    teams.data.forEach(team => {
        if (team.players.length>10) {
            console.log(team);
            teamsInventoryStr +=
                `<table class="team-content">
                <th><h2>${team.name}</h2></th>
                <th>
                <tr>
                    <td>${team.formation}</td>
                </tr>
                <tr>
                    <td>${team.players[0].name}</td>
                    <td>${team.players[0].position}</td>
                </tr>
                <tr>
                    <td>${team.players[1].name}</td>
                    <td>${team.players[1].position}</td>
                </tr>
                <tr>
                    <td>${team.players[2].name}</td>
                    <td>${team.players[2].position}</td>
                </tr>
                <tr>
                    <td>${team.players[3].name}</td>
                    <td>${team.players[3].position}</td>
                </tr>
                <tr>
                    <td>${team.players[4].name}</td>
                    <td>${team.players[4].position}</td>
                </tr>
                <tr>
                    <td>${team.players[5].name}</td>
                    <td>${team.players[5].position}</td>
                </tr>
                <tr>
                    <td>${team.players[6].name}</td>
                    <td>${team.players[6].position}</td>
                </tr>
                <tr>
                    <td>${team.players[7].name}</td>
                    <td>${team.players[7].position}</td>
                </tr>
                </tr>
                <tr>
                    <td>${team.players[8].name}</td>
                    <td>${team.players[8].position}</td>
                </tr>    
                <tr>
                    <td>${team.players[9].name}</td>
                    <td>${team.players[9].position}</td>
                </tr>
                <tr>
                    <td>${team.players[10].name}</td>
                    <td>${team.players[10].position}</td>
                </tr>
                </th>
            </table>`
        } else {
            console.log('You Broke it again')
        }
    });
    teamsInventory.innerHTML = teamsInventoryStr;
}

inventoryPopulate();