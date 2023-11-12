import express from "express";
import { getProducts, getOneProduct } from "../controllers/products.js";
import { addOrder, addPanier, getAnOrder, getOrders } from "../controllers/orders.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getOneProduct);
router.get("/orders", getOrders);
router.get("/orders/:id", getAnOrder);

router.post("/orders", addPanier);
router.post("/orders/:id", addOrder);

export default router;
 