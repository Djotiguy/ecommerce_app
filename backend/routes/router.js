import express from "express";
import { getProducts, getOneProduct } from "../controllers/products.js";
import { getAnOrder, getOrders } from "../controllers/orders.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getOneProduct);
router.get("/orders", getOrders);
router.get("/orders/:id", getAnOrder);

export default router;
 