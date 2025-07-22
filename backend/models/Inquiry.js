// backend/models/Inquiry.js
const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {                    // ✅ Mobile field re-added
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);
module.exports = Inquiry;
