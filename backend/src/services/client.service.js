import pool from "../database/database.js";

export async function getClient (id){
    const result = await pool.query(
        `SELECT * FROM client 
        WHERE id = $1`,
        [id]
    );
    return result.rows[0];
};

export async function getClientByTelephone(telephone) {
    const result = await pool.query(
        `SELECT * FROM client
        WHERE telephone = $1
        RETURNING *`,
        [telephone]
    );
    return result.rows[0];
};

export async function getClients(){
    const result = await pool.query(
        `SELECT * FROM client;`
    );
    return result.rows;
};

export async function createClient (name, telephone, address_line1, address_line2, neighborhood) {
    const result = await pool.query(
        `INSERT INTO client (name, telephone, address_line1, address_line2, neighborhood) 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING  *;`,
        [name, telephone, address_line1, address_line2, neighborhood] 
        );
    return result.rows[0];
};

export async function deleteClient (id) {
    const result = await pool.query(
        `DELETE FROM client 
        WHERE id = $1
        RETURNING *;`,
        [id]
    );
    return result.rows[0];
};

export async function updateClient (id, name, telephone, address_line1, address_line2, neighborhood) {
    const result = await pool.query(
        `UPDATE client
        SET name = $2, telephone = $3, address_line1 = $4, address_line2 = $5, neighborhood = $6
        WHERE id= $1
        RETURNING *;`,
        [id, name, telephone, address_line1, address_line2, neighborhood]
    );
    return result.rows[0];
};

