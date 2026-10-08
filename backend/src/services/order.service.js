
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

export async function createOrder (id_client, order_origin, total_value, delivery_address) {
    const result = await pool.query(
        `INSERT INTO orders (id_client, order_origin, total_value, delivery_address)
        VALUES ($1, $2, $3, $4)
        RETURNING *;`,
        [id_client, order_origin, total_value, delivery_address]
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


//Atualizar status do pedido
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
//Atualizar endereço do pedido
export async function updateOrderAddress (id, delivery_address) {
    const result = await pool.query(
        `UPDATE orders
        SET delivery_address= $2
        WHERE id= $1
        RETURNING *;`,
        [id, delivery_address]
    );
    return result.rows[0];
};