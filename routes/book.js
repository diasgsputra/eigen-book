/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Books APIs
 */

const express = require("express");
const router = express.Router();
const { getAllBooks, getNonBorrowedBooks } = require("../controllers/bookController");

/**
 * @swagger
 * /api/books/list:
 *   get:
 *     summary: Books list
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 * /api/books/list-available:
 *   get:
 *     summary: Books available
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */
const path = "/api/books"
router.get(path + "/list", (req, res) => getAllBooks(req, res));
router.get(path + "/list-available", (req, res) => getNonBorrowedBooks(req, res));
module.exports = router;
