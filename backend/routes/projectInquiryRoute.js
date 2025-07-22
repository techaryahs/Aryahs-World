// backend/routes/projectInquiry.js
const express = require("express");
const router = express.Router();
const ProjectInquiry = require("../models/ProjectInquiry");
const sendEmail = require("../utils/sendEmail");

router.post("/", async (req, res) => {
  const { name, email, phone, projectType, budget, message } = req.body;

  try {
    const newInquiry = new ProjectInquiry({ name, email, phone, projectType, budget, message });
    await newInquiry.save(); // sendEmail is triggered via Mongoose post-save hook

    res.status(200).json({ message: "Inquiry received and email sent to both admin and client." });
  } catch (error) {
    console.error("❌ Error saving inquiry:", error);
    res.status(500).json({ error: "Failed to process inquiry" });
  }
});

module.exports = router;
