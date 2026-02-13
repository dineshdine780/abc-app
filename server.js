const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
       
const userAuthRoutes = require("./routes/userAuthRoutes");
const voterRoutes = require("./routes/voterRoutes");
const adminRoutes = require("./routes/adminRoutes");
const staticVoterRoutes = require("./routes/staticVoterRoutes");

dotenv.config();
connectDB();

const app = express(); 
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/users", userAuthRoutes);
app.use("/api/voters", voterRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/static-voters", staticVoterRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));