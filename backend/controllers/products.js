import { sql } from "../db.js";

export async function getProducts(_, res) {
  try {
    const products = await sql("select * from products");
    // console.log("Products loaded");
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ error: "Error Server" });
  }
}

export async function getOneProduct(req, res) {
  try {
    const productId = req.params.id;
    const product = await sql(`SELECT * FROM products WHERE id = ${productId}`);

    if (product.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    console.log("Product loaded");
    return res.status(200).json(product[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
