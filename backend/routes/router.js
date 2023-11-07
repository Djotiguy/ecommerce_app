import express from "express";
import  {getProducts}  from "../controllers/products.js";

const router = express.Router();

router.get('/products', getProducts);

router.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
});

export default router;

