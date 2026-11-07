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


async function createClient (name, telephone, addressLine1, addressLine2, neighborhood){
    const response = await fetch(`${API_URL}/clients`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ 
            name, 
            telephone, 
            address_line1: addressLine1, 
            address_line2: addressLine2, 
            neighborhood 
        })
    });

    if(!response){
        console.error("Couldn't create Client");
    }

    const data = await response.json();
    console.log("Backend response", data)
    return data;

}
export {getClients, deleteClient, createClient};



