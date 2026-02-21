const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const VoterList = require("../models/VoterList");

const router = express.Router();


router.get("/users", async (req, res) => {
  try {
    const users = await User.find().sort({ name: 1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


router.put("/toggle-user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.isActive = !user.isActive;
    await user.save();

    res.json({ message: "Status updated", isActive: user.isActive });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/voters-by-user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    
    const voters = await VoterList.find({ submittedBy: userId })
      .sort({ createdAt: -1 });

    res.json(voters);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/route/:userId", async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.userId);
    const voters = await VoterList.find({ submittedBy: userId }).select(
      "latitude longitude name locationName voterId"
    );
    res.json(voters);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


router.get("/routes/all", async (req, res) => {
  try {
    const routes = await VoterList.find().select(
      "latitude longitude submittedBy"
    );

    res.json(routes);
  } catch (err) {
    console.error("All routes error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;