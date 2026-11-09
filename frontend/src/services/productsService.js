import API_URL from "./api";

async function getProducts () {
    try{
        const response = await fetch (`${API_URL}/clients`);

        if(!response.ok){
            throw new Error ("Couldn't get Clients");
        }

        const data = await response.json()

        return data;

    }catch(e){
        console.error(e);
    }
}