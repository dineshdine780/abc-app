// const express = require("express");
// const VoterList = require("../models/VoterList");

// const router = express.Router();


// router.post("/save-voter", async (req, res) => {
//   try {
//     const { name, phone, voterId, latitude, longitude, locationName, submittedBy } = req.body;

//     if (!name || !voterId || !latitude || !longitude || !locationName) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     const voter = await VoterList.create({
//       name,
//       phone,
//       voterId,
//       latitude,
//       longitude,
//       locationName,
//     });

//     res.json({ message: "Voter saved successfully", voter });
//   } catch (error) {
//     console.error("Error saving voter:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// router.get("/voter-list", async (req, res) => {
//   try {
//     const voters = await VoterList.find().sort({ createdAt: -1 });
//     res.json(voters);
//   } catch (error) {
//     console.error("Error fetching voters:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;






const express = require("express");
const mongoose = require("mongoose");
const VoterList = require("../models/VoterList");

const router = express.Router();

router.post("/save-voter", async (req, res) => {
  try {
    const { name, phone, voterId, latitude, longitude, locationName, submittedBy } = req.body;

    if (!name || !voterId || !latitude || !longitude || !submittedBy)
      return res.status(400).json({ message: "Missing required fields" });

    const voter = await VoterList.create({
      name,
      phone,
      voterId,
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

