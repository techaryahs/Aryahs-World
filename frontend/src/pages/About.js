import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import mission from "../assets/mission.png"
import robot from "../assets/robot.gif"
import robot1 from "../assets/robot1.gif"
import client from "../assets/client.gif"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="bg-gradient-to-br from-[#f0f4ff] to-[#f9fcfb] text-gray-800">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-20">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10"
        >
          🚀 About Aryahs World Infotech
        </motion.h1>

        {/* Robots + Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Robot - Hidden on mobile */}
          <motion.img
            src={robot1}
            alt="Robot waving from left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-32 md:w-40 h-auto hidden md:block"
          />

          {/* Center Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg max-w-2xl text-center text-gray-600"
          >
            At Aryahs World, we bring innovation and intelligence to digital transformation.
            From AI-powered real estate to smart IoT systems, we help startups and enterprises
            build scalable, smart, and secure solutions.
          </motion.p>

          {/* Right Robot */}
          <motion.img
            src={robot}
            alt="Robot waving from right"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-32 md:w-40 h-auto"
          />
        </div>
      </section>




      {/* Our Mission */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={mission}
            alt="Mission"
            className="w-full max-h-[300px] object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,2)] rounded-md"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4">🎯 Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to bridge the gap between technology and real-world impact through creative problem-solving, customer-centric products, and AI-first thinking. We aim to lead the innovation frontier in Web, AI, IoT, and Secure 6G data.
            </p>
          </div>
        </div>
      </section>


      {/* What We Do */}
      <section className="relative py-24 px-4 md:px-20 bg-gradient-to-r from-[#eafbf6] to-[#f4f9ff] overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#c7f0e9] opacity-30 rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#dbeafe] opacity-30 rounded-full blur-3xl z-0" />

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 relative z-10">💼 What We Do</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 relative z-10">
          From AI to IoT, we empower startups and enterprises to shape the future with intelligent, secure, and scalable solutions.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
          {[
            ['🌐', 'Web & Mobile App Development'],
            ['🤖', 'AI/ML Solutions & Integration'],
            ['📶', 'IoT and 6G Secure Systems'],
            ['🔍', 'Tech Consulting & Audits'],
            ['🧠', 'AI Research & Product Innovation'],
            ['📈', 'Startup Collaboration'],
          ].map(([icon, title], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-xl p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-300 group"
              data-aos="zoom-in"
            >
              {/* Icon with subtle animation */}
              <div className="text-5xl mb-4 group-hover:animate-pulse transition duration-300">{icon}</div>

              {/* Title with underline accent */}
              <h4 className="text-lg font-semibold text-gray-800 relative after:block after:w-8 after:h-1 after:bg-indigo-500 after:mt-2 after:mx-auto">
                {title}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Clients & Partners */}
      <section className="relative py-24 px-6 md:px-24 bg-gradient-to-br from-[#fafdff] to-[#e9f5ff] overflow-hidden">
        {/* Decorative Gradient Blobs */}
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-gradient-to-tr from-blue-100 via-blue-300 to-cyan-100 rounded-full opacity-30 blur-3xl z-0"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-br from-pink-100 via-purple-200 to-indigo-100 rounded-full opacity-30 blur-3xl z-0"></div>

        <div className="relative z-10 grid md:grid-cols-2 items-center gap-16">
          {/* Left Text Section */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-transparent bg-clip-text">
              🤝 Our Clients & Partners
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              We've collaborated with innovative startups and tech-forward enterprises, delivering world-class solutions in AI, IoT, and digital transformation. Our client-first approach ensures long-term partnerships and meaningful results.
            </p>

            {/* Client Tags */}
            <div className="flex flex-wrap gap-4">
              {['StartupX', 'GreenTech', 'TechNova', 'UrbanHive', 'NeoGen AI', 'DataGrid'].map((client, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white text-gray-700 px-6 py-2 rounded-full shadow-md text-sm font-semibold transition"
                >
                  {client}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right GIF Image - Bigger */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={client} // ✅ Your imported GIF
              alt="Client Collaboration"
              className="w-full max-w-xl md:max-w-2xl rounded-2xl shadow-2xl border border-gray-100"
            />
          </motion.div>
        </div>
      </section>



      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-20 text-center bg-gradient-to-r from-[#e4f0fd] to-[#ebfef5]">
        <h2 className="text-3xl font-bold mb-6">📩 Let’s Build the Future Together</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Ready to take your idea to the next level? Connect with us today and let’s create something extraordinary.
        </p>
        <a href="/contact">
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full text-lg shadow transition duration-300">
            Contact Us
          </button>
        </a>
      </section>
    </main>
  );
};

export default About;
