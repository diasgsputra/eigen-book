const express = require("express");
const router = express.Router();
const { getAllBooks } = require("../controllers/bookController");

const path = "/api/books"
router.get(path + "/list", (req, res) => getAllBooks(req, res));

module.exports = router;
