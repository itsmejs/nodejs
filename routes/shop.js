const express = require("express");
const path = require("path");
const router = express.Router();
const shopRoute = require("../control/shop");

router.get("/", shopRoute.getHomepage);

router.get("/book-lists", shopRoute.bookLists);

router.get("/cart", shopRoute.cartbox);

router.get("/orders", shopRoute.orders);

router.get("/checkout", shopRoute.checkout);

module.exports = router;
