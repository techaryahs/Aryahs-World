// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const projectInquiryRoute = require("./routes/projectInquiryRoute");

// ✅ Load environment variables from backend/.env explicitly
dotenv.config({ path: path.resolve(__dirname, ".env") });

// ✅ Debug logs to verify .env variables are loaded
console.log("DEBUG :: EMAIL_USER:", process.env.EMAIL_USER || "❌ NOT FOUND");
console.log("DEBUG :: EMAIL_PASS:", process.env.EMAIL_PASS ? "✅ FOUND" : "❌ NOT FOUND");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(
  {
    origin: 'https://aryahs-world.vercel.app',
    credentials: true
  }
));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed", err));

// Routes
app.use("/api/inquiry", require("./routes/inquiryRoute"));
app.use("/api/project-inquiry", projectInquiryRoute);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
