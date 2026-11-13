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

    if(!response.ok){
        throw new Error ("Couldn't delete Client");
    }

    const data = await response.json();
    return data;

}

async function editClient (id, updatedClient){
    try{
        const response = await fetch (`${API_URL}/clients/${id}`, {
            method:"PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id,
                name: updatedClient.name,
                telephone: updatedClient.telephone,
                address_line1: updatedClient.addressLine1,
                address_line2: updatedClient.addressLine2,
                neighborhood: updatedClient.neighborhood
            })
        })

        if(!response.ok){

            const errorData = await response.text();
            console.log("Erro retornado pelo backend:", errorData);
            throw new Error ("Couldn't delete Client");
            
        }

        const data = await response.json();

        return data;
    }catch(e){
        console.error(e);
    }
}

export {getClients, deleteClient, createClient, editClient};



