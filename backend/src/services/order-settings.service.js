import pool from "../database/database.js";


export async function getDeliveryFee (){
    const result = await pool.query(`
        SELECT delivery_fee
        FROM order_settings
        WHERE id=1`
    )
    return result.rows[0]
}


export async function updateDeliveryFee(delivery_fee) {
    const result = await pool.query(
        `UPDATE order_settings
        SET delivery_fee = $2
        WHERE id= 1
        RETURNING *`,
        [delivery_fee]
    )
    return result.rows[0]
}