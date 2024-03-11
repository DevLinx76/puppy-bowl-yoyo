const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-a"

// All players 
export async function getPlayers() {
    try {
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();
        return result;
    } catch (error) { 
        console.error(error);
    }
}
// Single player by id 
export async function getPlayer(playerId) {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`);
        const result = await response.json();
        return result.data.player;
    } catch (error) { 
        console.error(error);
    }
}
// Create a new player 
export async function createPlayer(player) {
    try {
        const response = await fetch(`${API_URL}/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(player)
        });
        const result = await response.json();
        return result;
    } catch (error) { 
        console.error(error);
    }
}
// Update a player 
export async function updatePlayer(playerId, player) {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(player)
        });
        const result = await response.json();
        return result;
    } catch (error) { 
        console.error(error);
    }
}
// Delete a player
export async function deletePlayer(playerId) {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        return result;
    } catch (error) { 
        console.error(error);
    }
}


