import { Client } from 'pg';
const dotenv = require('dotenv');
dotenv.config();

async function getClient(){

    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_NAME,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
    });
    return client;
}

export async function sql(sql, values){
    const client = await getClient();
    await client.connect();
    const res = await client.query(sql, values);
    await client.end();
    return res;
}