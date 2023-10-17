const express = require("express");
const {
  getAllProducts,
  getAllProductstesting,
} = require("../controllers/products");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductstesting);

module.exports = router;
