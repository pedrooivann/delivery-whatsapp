import API_URL from "./api";

export async function getProducts () {
    try{
        const response = await fetch (`${API_URL}/products`);

        if(!response.ok){
            throw new Error ("Couldn't get products");
        }

        const data = await response.json()
        return data;

    }catch(e){
        console.error(e);
        throw e;

    }
}

export async function createProduct (idCategory, name, description, price){
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(
                {
                    id_category: Number(idCategory),
                    name, 
                    description, 
                    price}
            )
        });
        
        if(!response.ok){
            const e = await response.json();
            throw new Error(e.message || e.error || "Failed to create product")
        }
        
        const data = await response.json();

        return data;
    }catch(e){
        console.error(e)
        throw e;
    }
}


export async function deleteProduct (id) {
    try {
        const response = await fetch(`${API_URL}/products/${id}`,{
            method: "DELETE",
        })

        if(!response.ok){
            console.error(e);
            throw e;
        }

    } catch (e) {
        console.error(e);
        throw e;

    }
}


export async function updateProduct (id, idCategory, name, description, price) {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(
                {
                id,
                id_category: Number(idCategory),
                name, 
                description, 
                price}
            )})
            
            if(!response.ok){
                const errorData = await response.json();
                console.error("Error on server", errorData);
                throw new Error("Couldn't update product")
            }
        
            const data = await response.json();
            return data;
    
    
        } catch (e) {
            console.error(e);
            throw e;
    }
}