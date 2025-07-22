import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const StartProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/project-inquiry`, formData);
      setStatus("✅ Inquiry sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending inquiry:", error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 px-4">
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-8 bg-white shadow-2xl rounded-xl border border-blue-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
          Start a Project
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-purple-400 outline-none"
            required
          >
            <option value="">Select Project Type</option>
            <option value="Website">Website</option>
            <option value="Mobile App">Mobile App</option>
            <option value="AI/ML Solution">AI/ML Solution</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-purple-400 outline-none"
            required
          >
            <option value="">Select Budget</option>
            <option value="Below ₹25,000">Below ₹25,000</option>
            <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
            <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
            <option value="Above ₹1,00,000">Above ₹1,00,000</option>
          </select>
        </div>

        <textarea
          name="message"
          rows="4"
          placeholder="Tell us more about your project..."
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-4 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />

        <button
          type="submit"
          className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
        >
          Submit Inquiry
        </button>

        {status && (
          <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
        )}
      </motion.form>
    </div>
  );
};

export default StartProjectForm;
