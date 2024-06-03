/**
 * @swagger
 * tags:
 *   name: Borrow-book
 *   description: Borrow book APIs
 */

const express = require("express");
const router = express.Router();
const { addBorrowBook, returnBook } = require("../controllers/borrowController");

/**
 * @swagger
 * /api/borrow:
 *   post:
 *     summary: Create borrow book
 *     tags: [Borrow-book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_book:
 *                 type: integer
 *               id_member:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Save successful
 *       500:
 *         description: Internal Server Error
 */
const path = "/api/borrow"
router.post(path + "/add", (req, res) => addBorrowBook(req, res));
router.get(path + "/return/:id_borrow", (req, res) => returnBook(req, res));

module.exports = router;
