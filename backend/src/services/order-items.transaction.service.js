
import { 
    createOrderItem,
    deleteOrderItem,
    updateAmount } from "./order-items.service.js";
import { calculateTotal, updateOrderAddress } from "./order.service.js";
import { pool } from "../database/database.js"


export async function createOrderItemTransaction (id_orders, id_product, amount) {

    const client = await pool.connect();
    
    try{

        await client.query(`BEGIN`);
        const createdOrderItem = await createOrderItem(client, id_orders, id_product, amount);
        
        if (!createdOrderItem) { throw new Error("Order item was not created"); }
        
        const updatedTotal = await calculateTotal(client, id_orders);
        await client.query(`COMMIT`);
    
    
        return {
            item: createdOrderItem, 
            total: updatedTotal
        };
    }catch(e){
        try{
            await client.query(`ROLLBACK`);
                }catch(rollbackError){
                    console.error("The Rollback failed", rollbackError);
            };
        throw e;
    }finally{
        client.release()
    };
};

export async function deleteOrderItemTransaction (id) {
    const client = await pool.connect();

    try{

        await client.query(`BEGIN`);

        const deletedOrderItem = await deleteOrderItem(client, id);
        
        if (!deletedOrderItem) { throw new Error ("Item not found to be deleted"); };

        const updatedTotal = await calculateTotal(client, deletedOrderItem.id_orders);

        await client.query(`COMMIT`);

        
        return {
            total: updatedTotal
        };

        }catch(e){
            try{
                await client.query(`ROLLBACK`);
                    }catch(rollbackError){
                        console.error("The Rollback failed", rollbackError);
                    };
            throw e;
            }
        finally{
            client.release();
        };
};

export async function updateAmountTransaction (id, amount) {

    const client = await pool.connect()

    try {

        await client.query(`BEGIN`);

        const updatedAmount = await updateAmount(client, id, amount);

        if(!updatedAmount) {throw new Error ("Item not found to be updated");};

        const updatedTotal = await calculateTotal(client, updatedAmount.id_orders);

        await client.query(`COMMIT`);

        return {
            item: updatedAmount,
            total: updatedTotal
        }

        }catch(e){
            try{
                await client.query(`ROLLBACK`);
                    }catch(rollbackError){
                        console.error("The Rollback failed", rollbackError);
                    };
            throw e;
            }
        finally{
            client.release();
        };
};