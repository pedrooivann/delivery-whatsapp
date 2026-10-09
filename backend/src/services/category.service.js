
export async function getCategory (id){
    const result = await pool.query(
        `SELECT * FROM category
        WHERE id = $1`,
        [id]
    );
    return result.rows[0];
};

export async function getCategories(){
    const result = await pool.query(
        `SELECT * FROM category;`
    );
    return result.rows;
};

export async function createCategory (name) {
    const result = await pool.query(
        `INSERT INTO category (name) 
        VALUES ($1) 
        RETURNING  *;`,
        [name]
        );
    return result.rows[0];
};

export async function deleteCategory (id) {
    const result = await pool.query(
        `DELETE FROM category 
        WHERE id = $1
        RETURNING *;`,
        [id]
    );
    return result.rows[0];
};

export async function updateCategory (id, name) {
    const result = await pool.query(
        `UPDATE category
        SET name=$2
        WHERE id= $1
        RETURNING *;`,
        [id, name]
    );
    return result.rows[0];
};

