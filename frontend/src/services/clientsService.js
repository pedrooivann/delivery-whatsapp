import API_URL from "./api.js";


async function getClients (){
    const response = await fetch(`${API_URL}/clients`);

    if(!response.ok){
        throw new Error ("Couldn't get Clients");
    }
    const data = await response.json();

    return data;
}



async function deleteClient (id) {
    const response = await fetch(`${API_URL}/clients/${id}`, {
        method: 'DELETE'
    });

    if(!response.ok){
        throw new Error ("Couldn't delete Client");
    }

    const data = response.json();
    return data;
}

export {getClients, deleteClient};



