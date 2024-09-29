const express = require("express");
const Product = require("../model/product");

const router = express.Router();

router.get("", async function (req, res) {
  foundProducts = await Product.find({});
  return res.json(foundProducts);
});

router.get("/:productId", async function (req, res) {
  const productId = req.params.productId;
  // foundProduct = await Product.findById(productId, {});
  try {
    foundProduct = await Product.findById(productId);
    return res.json(foundProduct);
  } catch (e) {
    return res.status(422).send({
      errors: [{ title: "Product error", detail: "Product not found!" }],
    });
  }
});

module.exports = router;
