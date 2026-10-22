import pool from "../database/database.js";

export async function getOrderItem (id, id_orders){
    const result = await pool.query(
        `SELECT * FROM order_items 
        WHERE id = $1 AND id_orders = $2`,
        [id, id_orders]
    );
    return result.rows[0];
};

export async function getOrderItems(id_orders){
    const result = await pool.query(
        `SELECT * FROM order_items
        WHERE id_orders = $1;`,
        [id_orders]
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

export async function deleteOrderItem (client, id, id_orders) {
    const result = await client.query(
        `DELETE FROM order_items 
        WHERE id = $1 AND id_orders = $2
        RETURNING *;`,
        [id, id_orders]
    );
    return result.rows[0];
};

export async function updateAmount (client, id, amount, id_orders) {
    const result = await client.query(
        `UPDATE order_items
        SET amount= $2
        WHERE id= $1 AND id_orders = $3
        RETURNING *;`,
        [id, amount, id_orders]
    );
    return result.rows[0];
};


export async function updateOrderItem(client, id, id_orders, id_product) {
    const result = await client.query(
        `UPDATE order_items AS oi
        SET id_product = p.id,
        unit_price = p.price
        FROM product AS p
        WHERE oi.id = $1
        AND oi.id_orders = $2
        AND p.id = $3
        RETURNING oi.*;`,
        [id, id_orders, id_product]
    );

    return result.rows[0];
}
