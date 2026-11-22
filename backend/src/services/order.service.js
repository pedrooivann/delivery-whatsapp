import pool from "../database/database.js";

export async function getOrders (){
    const result = await pool.query(
        `SELECT * FROM orders;`
    );
    return result.rows;
};

export async function getOrder (id) {
    const result = await pool.query(
        `SELECT * FROM orders
        WHERE id = $1`,
        [id]
    );
    return result.rows[0];
};

export async function createOrder (
    id_client, 
    order_origin, 
    delivery_address, 
    payment_method, 
    notes, 
    delivery_neighborhood, 
    delivery_reference,
    delivery_fee
) {
    const result = await pool.query(
        `INSERT INTO orders (
        id_client, 
        order_origin, 
        delivery_address, 
        payment_method, 
        notes, 
        delivery_neighborhood, 
        delivery_reference,
        delivery_fee
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;`,
        [id_client, 
        order_origin, 
        delivery_address, 
        payment_method, 
        notes, 
        delivery_neighborhood, 
        delivery_reference,
        delivery_fee]
    )
    return result.rows[0];
};

export async function deleteOrder (id) {
    const result = await pool.query(
        `DELETE FROM orders 
        WHERE id = $1
        RETURNING *;`,
        [id]
    );
    return result.rows[0];
};


export async function updateOrderStatus (id, order_status) {
    const result = await pool.query(
        `UPDATE orders
        SET order_status= $2
        WHERE id= $1
        RETURNING *;`,
        [id, order_status]
    );
    return result.rows[0];
};

export async function updateOrderAddress (id, delivery_address, delivery_neighborhood, delivery_reference) {
    const result = await pool.query(
        `UPDATE orders
        SET 
        delivery_address= $2, 
        delivery_neighborhood= $3, 
        delivery_reference = $4
        WHERE id= $1
        RETURNING *;`,
        [id, delivery_address, delivery_neighborhood, delivery_reference]
    );
    return result.rows[0];
};


export async function updateOrderNotes (id, notes){
    const result = await pool.query(
        `UPDATE orders
        SET notes = $2
        WHERE id = $1
        RETURNING *;`,
        [id, notes]
    )
    return result.rows[0]
}

//Calcula variavel total
export async function calculateTotal (client, id_orders) {

    const result = await client.query(
            `UPDATE orders
            SET total_value = (
            SELECT COALESCE(SUM(amount * unit_price), 0)
            FROM order_items
            WHERE id_orders = $1
            )
            WHERE id = $1
            RETURNING *;`,
            [id_orders]);
        return result.rows[0];
    };
