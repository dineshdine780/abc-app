// const VoterList = require("../models/VoterList");

// // Save new voter details
// exports.saveVoter = async (req, res) => {
//   try {
//     const { name, phone, voterId, latitude, longitude, locationName } = req.body;

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
//     console.error("Save voter error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get all voters (for admin)
// exports.getVoterList = async (req, res) => {
//   try {
//     const voters = await VoterList.find().sort({ createdAt: -1 });
//     res.json(voters);
//   } catch (error) {
//     console.error("Get voter list error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
