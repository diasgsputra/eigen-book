const express = require("express");
const router = express.Router();
const { getAllBooks, getNonBorrowedBooks } = require("../controllers/bookController");

const path = "/api/books"
router.get(path + "/list", (req, res) => getAllBooks(req, res));
router.get(path + "/list-available", (req, res) => getNonBorrowedBooks(req, res));
module.exports = router;
