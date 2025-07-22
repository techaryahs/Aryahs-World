// backend/models/ProjectInquiry.js
const mongoose = require("mongoose");
const sendEmail = require("../utils/sendEmail"); // ✅ adjust path if needed

const projectInquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  projectType: { type: String, required: true },
  budget: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true
});

// ✅ Send email to admin and client after a new inquiry is saved
projectInquirySchema.post("save", async function (doc) {
  try {
    await sendEmail({
      name: doc.name,
      email: doc.email,
      mobile: doc.phone,
      projectType: doc.projectType,
      budget: doc.budget,
      message: doc.message
    });
    console.log("✅ Project inquiry saved and emails sent.");
  } catch (error) {
    console.error("❌ Failed to send emails after saving inquiry:", error.message);
  }
});

module.exports = mongoose.model("ProjectInquiry", projectInquirySchema);
