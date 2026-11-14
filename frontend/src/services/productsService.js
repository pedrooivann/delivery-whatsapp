import API_URL from "./api";

export async function getProducts () {
    try{
        const response = await fetch (`${API_URL}/products`);

        if(!response.ok){
            throw new Error ("Couldn't get Clients");
        }

        const data = await response.json()

        return data;

    }catch(e){
        console.error(e);
    }
}

export async function createProduct (name, description, price){
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(
                {name, description, price}
            )
        });
        
        if(!response.ok){
            throw new Error("Couldn't create product");
        }
        
        return data;
    }catch(e){
        console.error(e);
    }
}
export async function deleteProduct (id) {
    try {
        const response = await fetch(`${API_URL}/products`,{
            method: "DELETE",
        })

        if(!response.ok){
            throw new Error("Couldn't delete product")
        }

        const data = response.json();
        return data;;

    } catch (e) {
        
    }
}

export async function updateProduct (id, name, description) {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(
                {name, description, price}
            )
    })
    } catch (e) {
        console.error(e);
    }
}