import API_URL from "./api.js";


async function getClients (){
    const response = await fetch(`${API_URL}/clients`);

    if(!response.ok){
        throw new Error ("Couldn't get Clients");
    }
    const data = await response.json();

    return data;
}

export default getClients;



