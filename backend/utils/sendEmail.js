const nodemailer = require("nodemailer");
require("dotenv").config();
const emailTemplate = require("./emailTemplate"); // ✅ professional HTML layout

// Load environment variables
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "shaneesharma33@gmail.com"; // ✅ fallback

// ✅ Debug log
console.log("DEBUG :: EMAIL_USER:", EMAIL_USER || "❌ NOT FOUND");
console.log("DEBUG :: EMAIL_PASS:", EMAIL_PASS ? "✅ FOUND" : "❌ NOT FOUND");
console.log("DEBUG :: ADMIN_EMAIL:", ADMIN_EMAIL || "❌ NOT FOUND");

const sendEmail = async ({
  name = "N/A",
  email = "N/A",
  mobile = "N/A",
  projectType = "N/A",
  budget = "N/A",
  message = "N/A"
}) => {
  try {
    if (!EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
      throw new Error("Missing EMAIL_USER, EMAIL_PASS or ADMIN_EMAIL environment variables.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const htmlContent = emailTemplate({
      name,
      email,
      phone: mobile,
      projectType,
      budget,
      message,
    });

    // Send to Admin
    const mailOptionsAdmin = {
      from: `"Aryahs World" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: "💼 New Project Inquiry Received",
      html: htmlContent,
    };

    // Send to User
    const mailOptionsClient = {
      from: `"Aryahs World" <${EMAIL_USER}>`,
      to: email,
      subject: "✅ We received your project request",
      html: htmlContent, // You may customize this differently if needed
    };

    console.log("DEBUG :: Sending emails...");

    await transporter.sendMail(mailOptionsAdmin);
    console.log("✅ Admin email sent");

    await transporter.sendMail(mailOptionsClient);
    console.log("✅ Client confirmation email sent");

  } catch (error) {
    console.error("❌ Error in sendEmail:", error.message);
    throw error;
  }
};

module.exports = sendEmail;
