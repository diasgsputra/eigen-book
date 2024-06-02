/**
 * @swagger
 * tags:
 *   name: Members
 *   description: Memberes APIs
 */

const express = require("express");
const router = express.Router();
const { getAllMembers, getCountBorrowedBooksByMember } = require("../controllers/memberController");

/**
 * @swagger
 * /api/members/list:
 *   get:
 *     summary: members list
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 * 
 * /api/members/count/{code_member}:
 *   get:
 *     summary: Count borrowed book by member
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: code_member
 *         required: true
 *         description: code member
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */

const path = "/api/members"
router.get(path + "/list", (req, res) => getAllMembers(req, res));
router.get(path + "/count/:code_member", (req, res) => getCountBorrowedBooksByMember(req, res));

module.exports = router;
