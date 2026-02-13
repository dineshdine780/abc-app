const express = require("express");
const { getStaticVoterList } = require("../controllers/staticVoterController");

const router = express.Router();

router.get("/list", getStaticVoterList);

module.exports = router;
