import { sql } from "../db.js";

export async function getOrders(_, res) {
  try {
    const orders = await sql("SELECT * FROM commande");
    return res.status(200).json({ data: orders });
  } catch (error) {
    return res.status(400).send({ error: "Bad request" });
  }
}

export async function getAnOrder(req, res) {
  try {
    const orderId = req.params.id;
    const order = await sql(`SELECT * FROM commande WHERE id = ${orderId}`);
    if (order.length === 0) {
      return res.status(400).json({ error: "Order not found" });
    }

    console.log("order loaded");
    return res.status(200).json(order[0]);
  } catch (error) {
    return res.status(500).json({ error: "Error Server" });
  }
}

export async function addOrder() {
    
}
