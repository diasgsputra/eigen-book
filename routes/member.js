const express = require("express");
const router = express.Router();
const { getAllMembers } = require("../controllers/memberController");

const path = "/api/members"
router.get(path + "/list", (req, res) => getAllMembers(req, res));

module.exports = router;
