import { getProduct } from "./product.service.js";
import { 
    createOrderItem,
    deleteOrderItem,
    updateAmount } from "./order-items.service.js";
import { calculateTotal} from "./order.service.js";
import { pool } from "../database/database.js"




export async function createOrderItemTransaction (id_orders, id_product, amount) {

    const client = await pool.connect();

    try{

        await client.query(`BEGIN`);

        
        const product = await getProduct(client, id_product);
        if(!product) {throw new Error("ProductNotFound")};

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
        if (!deletedOrderItem) { throw new Error ("ItemNotFound");};
        const updatedTotal = await calculateTotal(client, deletedOrderItem.id_orders);
        await client.query(`COMMIT`);

        
        return {
            item: deletedOrderItem,
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
        if(!updatedAmount) {throw new Error ("ItemNotFound");};
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
                        console.error("RollbackError", rollbackError);
                    };
            throw e;
            }
        finally{
            client.release();
        };
};