import API_URL from "./api";


export async function getOrderItemService(id_order, id){
    try {
        const response = await fetch (`${API_URL}/orders/${id_order}/item/${id}`)

        if(!response.ok){
            throw new Error("Couldn't get Order Item");
        }

        const data = await response.json();
        return data;
    } catch (e) {
        throw e;
    }
}

export async function getOrderItemsService(id_order){
    try {
        const response = await fetch(`${API_URL}/orders/${id_orders}/items`);


        if(!response.ok){
            throw new Error("Couldn't get Order Items");
        }

        const data = await response.json()
        return data;

    } catch (e) {
        throw e;
    }
}

export async function createOrderItemsService (id_order, items){
    try {
        const response = await fetch (`${API_URL}/orders/${id_order}/items`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(items)
        });

        if(!response.ok){
            throw new Error("Couldn't create Order Items");
        }

        const data = await response.json();
        return data;
    
    } catch (e) {
        throw e;
    }
}

async function updateOrderItemAmountService(id_order, id, amount){
    try {
        const response = await fetch (`${API_URL}/order/${id_order}/items/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                id_order,
                amount
            })
        })
    
        if(!response.ok){
            throw new Error("Coundn't update Order Item")
        }

        const data = await response.json()
        return data;
    
    } catch (e) {
        
    }
}

async function updateOrderItemService(id_order, id, id_product){
    try {
        const response = await fetch (`${API_URL}/order/${id_order}/items/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                id_order,
                id_product
            })    
        })
    
        if(!response.ok){
            throw new Error("Coundn't update Order Item")
        }

        const data = await response.json()
        return data;
    
    } catch (e) {
        throw e;
    }
}


