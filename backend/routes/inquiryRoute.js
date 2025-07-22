// backend/routes/inquiryRoute.js
const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");
const sendEmail = require("../utils/sendEmail");

router.post("/", async (req, res) => {
  try {
    const inquiry = new Inquiry({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,       // ✅ Ensure mobile is passed here
      message: req.body.message,
    });

    await inquiry.save();
    await sendEmail(req.body); // Optional if you’re emailing the details

    res.status(201).json({ message: "Inquiry submitted and email sent successfully" });
  } catch (error) {
    console.error("Error in submitting inquiry:", error);
    res.status(500).json({ error: "Failed to submit inquiry" });
  }
});

module.exports = router;
