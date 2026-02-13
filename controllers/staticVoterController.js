const fs = require("fs");
const path = require("path");

exports.getStaticVoterList = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../voterList.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const list = JSON.parse(data);

    res.json(list);
  } catch (error) {
    res.status(500).json({ message: "Failed to load voter list" });
  }
};
