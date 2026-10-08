
export async function getClient (id){
    const result = await pool.query(
        `SELECT * FROM client 
        WHERE id = $1`,
        [id]
    );
    return result.rows[0];
};

export async function getClients(){
    const result = await pool.query(
        `SELECT * FROM client;`
    );
    return result.rows;
};

export async function createClient (name, telephone, addressLine1, addressLine2, neighborhood) {
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

