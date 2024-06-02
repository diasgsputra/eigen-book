const express = require("express");
const router = express.Router();
const { getAllMembers, getCountBorrowedBooksByMember } = require("../controllers/memberController");

const path = "/api/members"
router.get(path + "/list", (req, res) => getAllMembers(req, res));
router.get(path + "/count/:code_member", (req, res) => getCountBorrowedBooksByMember(req, res));

module.exports = router;
