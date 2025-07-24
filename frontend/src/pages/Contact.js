import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted successfully!");
  };

  return (
    <div className="bg-gradient-to-br from-[#f0f4ff] via-white to-[#f0f4ff] text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          📬 Get in Touch with Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          We'd love to hear from you! Whether you're curious about features,
          a free trial, or even partnerships — we're ready to answer any and all questions.
        </motion.p>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border p-3 rounded w-full"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border p-3 rounded w-full"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="border p-3 rounded w-full"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="border p-3 rounded w-full"
              value={formData.message}
              onChange={handleChange}
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
          <div className="space-y-4 text-gray-700">
            <p><strong>📍 Address:</strong> Plot No 80 & 81, Sector 18A, Nerul, Navi Mumbai, Maharashtra 400706</p>
            <p><strong>📞 Phone:</strong> +91 8657869659</p>
            <p><strong>✉️ Email:</strong> contact@aryahsworld.com</p>
            <p><strong>🕒 Hours:</strong> Mon–Fri, 9AM–5PM</p>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-2xl text-indigo-600">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-800">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-700">
                <FaFacebook />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="w-full px-6 md:px-20 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold mb-6"
        >
          📍 Our Office Location
        </motion.h2>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Aryahs World Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.697748246635!2d73.0113221!3d19.033035899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c34d7fd7396b%3A0x8936c484aef8948b!2sAryahs%20World%20Infotech%20OPC%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1752839061744!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
