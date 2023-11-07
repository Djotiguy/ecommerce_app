import express from "express";
import { getProducts, getOneProduct } from "../controllers/products.js";

const router = express.Router();

router.get("/products", getProducts);

router.get("/products/:id", getOneProduct);

export default router;
