const express = require("express");
const path = require("path");
const router = express.Router();
const adminRoute = require("../control/admin");

router.get("/add-books", adminRoute.Add_books);

router.post("/added", adminRoute.addedBooks);

router.get("/adminbooklists", adminRoute.adminbooklists);

module.exports = router;
