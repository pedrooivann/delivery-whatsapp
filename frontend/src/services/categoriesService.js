import Header from "../components/Header/Header";
import API_URL from "./api";

export async function getCategories (){
    try {
        const response = await fetch (`${API_URL}/categories`);
        
        if(!response.ok){
            throw new Error("Couldn't get Categories")
        }
        const data = response.json();
        return data;

    }catch(e){
        console.error(e);
    }
}

export async function createCategories (name){
    try {
        const response = await fetch (`${API_URL}/categories`, {
            
            method: "POST",
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify({name})
    });

        if(!response.ok){
            throw new Error("Coundn't create Category");
        }

        const data = await response.json();

        return  data;

    }catch(e){
        console.error(e);
    }
}

export async function deleteCategory(id){
    try {
        const response = await fetch(`${API_URL}/categories/${id}`, {
            method: "DELETE",
        });

        if(!response.ok) {
            throw new Error("Couldn't delete Category");
        }

        const data = await response.json();

        return data;

    }catch(e){
        console.error(e);
    }
}

export async function updateCategory (id, name) {
    try {
        const response = await fetch (`${API_URL}/categories/${id}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({name})
        });

        if(!response.ok) {
            throw new Error("Couldn't update Category");
        }

        const data = await response.json();

        return data;
        
    } catch (e) {
        console.log(e);
    }
}