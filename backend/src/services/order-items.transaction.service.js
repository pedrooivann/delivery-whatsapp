import { getProduct } from "./product.service.js";
import { 
    updateOrderItem,
    createOrderItem,
    deleteOrderItem,
    updateAmount } from "./order-items.service.js";
import { calculateTotal} from "./order.service.js";
import pool from "../database/database.js"




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

export async function deleteOrderItemTransaction (id, id_orders) {
    const client = await pool.connect();
    try{

        await client.query(`BEGIN`);
        const deletedOrderItem = await deleteOrderItem(client, id, id_orders);
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

export async function updateAmountTransaction (id, amount, id_orders) {

    const client = await pool.connect()

    try {
        console.log({ id, amount, id_orders});
        await client.query(`BEGIN`);
        const updatedAmount = await updateAmount(client, id, amount, id_orders);
        if(!updatedAmount) {throw new Error ("ItemNotFound");};

        console.log({updatedAmount})
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

export async function updateOrderItemTransaction(id, id_orders, id_product) {
    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        const updatedItem = await updateOrderItem(client, id, id_orders, id_product);

        if (!updatedItem) {
            throw new Error("ItemOrProductNotFound");
        }

        const updatedTotal = await calculateTotal(client, updatedItem.id_orders);

        await client.query("COMMIT");

        return {
            item: updatedItem,
            total: updatedTotal
        };
    } catch (e) {
        try {
            await client.query("ROLLBACK");
        } catch (rollbackError) {
            console.error("Rollback failed", rollbackError);
        }

        throw e;
    } finally {
        client.release();
    }
}