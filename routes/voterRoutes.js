
const express = require("express");
const VoterList = require("../models/VoterList");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/save-voter", auth, async (req, res) => {
  try {
    const {
      number,
      name,
      phone,
      voterId,
      boothNo,
      comment,
      q1,
      q2,
      q3,
      q4,
      latitude,
      longitude,
      locationName
    } = req.body;

    const submittedBy = req.user._id; 

    if (!name || !voterId || !latitude || !longitude) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const voter = await VoterList.create({
      number,
      name,
      phone,
      voterId,
      boothNo,
      comment,
      q1,
      q2,
      q3,
      q4,
      latitude,
      longitude,
      locationName,
      submittedBy
    });

    res.json({ message: "Voter saved", voter });

  } catch (err) {
    console.error("Error saving voter:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;  

