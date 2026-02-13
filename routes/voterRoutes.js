

const express = require("express");
const mongoose = require("mongoose");
const VoterList = require("../models/VoterList");

const router = express.Router();

router.post("/save-voter", async (req, res) => {
  try {
    const { name, phone, voterId, boothNo, comment, latitude, longitude, locationName, submittedBy } = req.body;

    if (!name || !voterId || !latitude || !longitude || !submittedBy) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const voter = await VoterList.create({
      name,
      phone,
      voterId,
      boothNo,
      comment,
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






router.get("/list", (req, res) => {
  try {
    const data = fs.readFileSync("voters.json", "utf8");
    const voters = JSON.parse(data);
    res.json({ voters });
  } catch (error) {
    res.status(500).json({ message: "Unable to read voter list" });
  }
});



module.exports = router;