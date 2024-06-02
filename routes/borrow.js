const express = require("express");
const router = express.Router();
const { addBorrowBook } = require("../controllers/borrowController");

const path = "/api/borrow"
router.post(path + "/add", (req, res) => addBorrowBook(req, res));

module.exports = router;
