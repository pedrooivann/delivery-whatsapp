import pg from 'pg';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({
    path: resolve(__dirname, '../../.env')
});

const { Pool } = pg;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

pool.query(`
    SELECT
        current_database(),
        current_user,
        (SELECT COUNT(*) FROM product) AS products,
        (SELECT COUNT(*) FROM category) AS categories
`)
.then(result => console.log(result.rows))
.catch(error => console.error(error));

export default pool;