
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

export async function createOrderItems (id_orders, id_product, amount, unit_price) {
    const result = await pool.query(
        `INSERT INTO order_items (id_orders, id_product, amount, unit_price) 
        VALUES ($1, $2, $3, $4) 
        RETURNING  *;`,
        [id_orders, id_product, amount, unit_price] 
        );
    return result.rows[0];
};

export async function deleteOrderItems (id) {
    const result = await pool.query(
        `DELETE FROM order_items 
        WHERE id = $1
        RETURNING *;`,
        [id]
    );
    return result.rows[0];
};

export async function updateAmount (id, amount) {
    const result = await pool.query(
        `UPDATE order_items
        SET amount= $2
        WHERE id= $1
        RETURNING *;`,
        [id, amount]
    );
    return result.rows[0];
};

