import {sql} from '../db.js';

export async function getProducts(_, res){
    try {
        const products = await sql("select * from products");
        console.log("Products loaded");
        return res.status(200).json(products);
    } catch (error) {
        res.status(500).send({error : "Error Server"})  
    }
}
