import express from "express";
import { getProducts, getOneProduct } from "../controllers/products.js";
import { addOrder, addPanier, getAnOrder, getOrders, getPanier } from "../controllers/orders.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getOneProduct);
router.get("/orders", getOrders);
router.get("/orders/:id", getAnOrder);
router.get("/recap-panier/", getPanier);

router.post("/orders", addPanier);
router.post("/recap-panier/", addOrder);

export default router;
 