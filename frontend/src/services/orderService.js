import API_URL from "./api.js";

export async function getOrder(id) {
    try {
        const response = await fetch (`${API_URL}/orders/${id}`)

        if(!response.ok){
            throw new Error ("Couldn't get Order")
        }

        const data = await response.json()
        return data;
    } catch (e) {
        console.error(e)
        throw e;
    }
}

export async function getOrders() {
    try {
        const response = await fetch(`${API_URL}/orders`);

        if(!response.ok){
            throw new Error ("Couldn't get Orders");
        }

        const data = await response.json()
        return data;
    } catch (e) {
            console.error(e)
            throw e;
    }
}

export async function createOrder(
        id_client,
        order_origin,
        delivery_address,
        payment_method,
        notes,
        delivery_neighborhood,
        delivery_reference
    ) {
    try {
        const response = await fetch (`${API_URL}/orders`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id_client,
                order_origin,
                delivery_address,
                payment_method,
                notes,
                delivery_neighborhood,
                delivery_reference
            })
        });

        if(!response.ok){
            throw new Error ("Could'nt create order")
        }

        const data = await response.json();

        return data;
    } catch (e) {
        console.error(e)
        throw e;
    }
}

export async function deleteOrder (id) {
    try {
        const response = await fetch(`${API_URL}/orders/${id}`, {
            method: "DELETE"
        })

        if(!response.ok){
            throw new Error ("Couldn't delete Order");
        }

    } catch (e) {
        console.error(e)
        throw e;        
    }
}

export async function updateOrderAddress(
        id,
        delivery_address, 
        delivery_neighborhood, 
        delivery_reference
    ) {
    
    try {
        const response = await fetch(`${API_URL}/orders/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                delivery_address, 
                delivery_neighborhood, 
                delivery_reference
            })
        } )

        if(!response.ok){
            throw new Error ("Couldn't update Order address")
        }

        const data = await response.json()
        return data;
    } catch (e) {
        console.error(e)
        throw e; 
    }
}

export async function updateOrderNotes(id, notes){
    try {
        const response = await fetch(`${API_URL}/orders/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                notes
            })
        })

        if(!response.ok){
            throw new Error ("Couldn't update Order notes")
        }

        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e)
        throw e; 
    }
}

export async function updateOrderStatus (id, order_status){
    try {
        const response = await fetch (`${API_URL}/orders/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                order_status
            })
        })
        
        if(!response.ok){
            throw new Error ("Coundn't update Order status")
        }

        const data = await response.json();
        return data;

    } catch (e) {
        console.error(e)
        throw e; 
    }
}