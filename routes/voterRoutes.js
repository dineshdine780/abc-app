const express = require("express");
const mongoose = require("mongoose");
const VoterList = require("../models/VoterList");

const router = express.Router();

router.post("/save-voter", async (req, res) => {
  try {
    const {number, name, phone, voterId, boothNo, comment, q1, q2, q3, q4, latitude, longitude, locationName, submittedBy } = req.body;

    if (!name || !voterId || !latitude || !longitude || !submittedBy) {
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