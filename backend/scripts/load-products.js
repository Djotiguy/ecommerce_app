const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config();

async function loadProducts(){
    const client = new Client({
        user: "postgres",
        host: "localhost",
        database: "ecommerce_app",
        password: "postgres",
        port: 5432
    });

    await client.connect();

    const res = await client.query('select 1');
    console.log(res);
    await client.end();
}

loadProducts();