
export async function getProduct (id){
    const result = await pool.query(
        `SELECT * FROM product 
        WHERE id = $1`,
        [id]
    );
    return result.rows[0];
};

export async function getProducts(){
    const result = await pool.query(
        `SELECT * FROM product;`
    );
    return result.rows;
};

export async function createProduct (name, description, price) {
    const result = await pool.query(
        `INSERT INTO product (name, description, price) 
        VALUES ($1, $2, $3) 
        RETURNING  *;`, //Query Insert
        [name, description, price] //Parametros da Query Insert
        );
    return result.rows[0];
};

export async function deleteProduct (id) {
    const result = await pool.query(
        `DELETE FROM product 
        WHERE id = $1
        RETURNING *;`,
        [id]
    );
    return result.rows[0];
};

export async function updateProduct (id, name, description, price) {
    const result = await pool.query(
        `UPDATE product
        SET name=$2, description= $3, price=$4
        WHERE id= $1
        RETURNING *;`,
        [id, name, description, price]
    );
    return result.rows[0];
};

