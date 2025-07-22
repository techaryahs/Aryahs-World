import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Tilt } from "react-tilt";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import caro1 from "../assets/caro1.jpg";
import CareerGenAi from "../assets/career_couns.jpg";
import GenAi from "../assets/genAI.jpg";
import gif from "../assets/client.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const services = [
  {
    name: "Majesstystays",
    description: "AI-powered real estate recommendations.",
    tag: "AI + Real Estate",
    url: "https://majesstystays.com",
    image: caro1,
  },
  {
    name: "CareerGenAI",
    description: "AI-powered career guidance platform using LLMs and resume intelligence.",
    tag: "AI, NLP, Web",
    url: "https://careergenai.in",
    image: CareerGenAi,
  },
  {
    name: "GenAI - Porshan Yojana",
    description: "Smart inspection system for food, sanitation, and student wellness using AI.",
    tag: "AI + Education + Public Health",
    url: "#",
    image: GenAi,
  },
];

const counters = [
  ["Projects Delivered", 48],
  ["Clients Served", 30],
  ["Industries", 7],
  ["Team Experts", 20],
];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="bg-gradient-to-br from-[#f0f4ff] via-[#eafaf1] to-[#f0f4ff]">

      {/* Hero Section */}
      <section className="text-center py-20 px-4 md:px-20 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-500 text-transparent bg-clip-text mb-6"
        >
          Explore Our AI-Powered Services
        </motion.h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Transforming industries with intelligence. We bring ideas to life using bleeding-edge technologies.
        </p>
        <img
          src={gif}
          alt="services-animation"
          className="mx-auto mt-10 w-72 md:w-[400px] object-contain"
        />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-20 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          💼 Our Flagship Products
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Tilt key={index} className="bg-white rounded-2xl shadow-xl transition-all hover:shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 flex flex-col h-full"
              >
                <img src={service.image} alt={service.name} className="h-40 w-full object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-1">{service.name}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mb-4 inline-block">
                  {service.tag}
                </span>
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-indigo-600 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-indigo-700 transition"
                >
                  Visit Website
                </a>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Why Choose Aryahs Services?</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            We build scalable, intelligent and secure solutions tailored for your growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {[
              ["🚀", "Scalable Tech", "We build systems that grow with your business."],
              ["🔒", "Secure Infrastructure", "Security is built-in, not added later."],
              ["🤖", "AI-First Approach", "We infuse intelligence into your workflows."],
            ].map(([emoji, title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl"
              >
                <div className="text-4xl mb-2">{emoji}</div>
                <h4 className="text-lg font-semibold mb-1">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Animated Counters */}
      <section ref={ref} className="bg-gray-100 py-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {counters.map(([label, value], i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center"
            >
              <h4 className="text-4xl font-bold text-indigo-600">
                {inView ? <CountUp end={value} duration={4} /> : 0}+
              </h4>
              <p className="text-sm text-gray-600 mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white px-4 md:px-20 text-center">
        <h3 className="text-3xl font-bold mb-10">💬 What Our Clients Say</h3>
        <Swiper spaceBetween={50} slidesPerView={1}>
          {[
            "Aryahs helped us launch a scalable platform in record time.",
            "Brilliant team! They understood our needs and delivered beyond expectations.",
            "Innovative, agile, and incredibly easy to work with.",
          ].map((text, idx) => (
            <SwiperSlide key={idx}>
              <div className="max-w-2xl mx-auto">
                <FaQuoteLeft className="text-4xl text-indigo-500 mb-4" />
                <p className="text-gray-700 text-lg">{text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Start a Project CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Start Your Project with Aryahs World</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Ready to bring your website or mobile app idea to life? Our team is here to make it happen.
          </p>
          <a
            href="/enquiry"
            className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Start a Project
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default Services;
