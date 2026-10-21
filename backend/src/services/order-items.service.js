import pool from "../database/database.js";

export async function getOrderItem (id){
    const result = await pool.query(
        `SELECT * FROM order_items 
        WHERE id = $1`,
        [id]
    );
    return result.rows[0];
};

export async function getOrderItems(){
    const result = await pool.query(
        `SELECT * FROM order_items;`
    );
    return result.rows;
};

export async function createOrderItem (client, id_orders, id_product, amount) {
    const result = await client.query(
        `INSERT INTO order_items (id_orders, id_product, amount, unit_price) 
        SELECT $1, id, $3, price
        FROM product
        WHERE id=$2
        RETURNING  *;`,
        [id_orders, id_product, amount] // id e price vão ser da tabela produto
        );
    return result.rows[0];
};

export async function deleteOrderItem (client, id) {
    const result = await client.query(
        `DELETE FROM order_items 
        WHERE id = $1
        RETURNING *;`,
        [id]
    );
    return result.rows[0];
};

export async function updateAmount (client, id, amount) {
    const result = await client.query(
        `UPDATE order_items
        SET amount= $2
        WHERE id= $1
        RETURNING *;`,
        [id, amount]
    );
    return result.rows[0];
};

