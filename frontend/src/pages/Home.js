import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import React, { useEffect } from "react";


import AOS from "aos";
import "aos/dist/aos.css";

import caro1 from "../assets/caro1.jpg";
import caro2 from "../assets/caro2.jpg";
// import caro3 from "../assets/caro3.jpeg";
import CareerGenAi from "../assets/career_couns.jpg";
import GenAi from "../assets/genAI.jpg";
import G from "../assets/6G.jpeg";

import {
  CodeBracketIcon,
  Cog6ToothIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  PaintBrushIcon,
  LightBulbIcon,
  SparklesIcon, // ✅ valid replacement for RobotIcon
  CpuChipIcon
} from "@heroicons/react/24/outline";


const capabilities = [
  {
    icon: <CodeBracketIcon className="h-10 w-10 text-indigo-600" />,
    title: "Web & App Development",
    desc: "Responsive, scalable apps",
    link: "/services/web-dev",
  },
  {
    icon: <Cog6ToothIcon className="h-10 w-10 text-green-600" />,
    title: "AI/ML Integration",
    desc: "Smart & adaptive systems",
    link: "/services/ai-ml",
  },
  {
    icon: <CloudIcon className="h-10 w-10 text-blue-500" />,
    title: "Cloud Deployment",
    desc: "Cloud-native & hybrid",
    link: "/services/cloud",
  },
  {
    icon: <LightBulbIcon className="h-10 w-10 text-yellow-500" />,
    title: "Tech Consulting",
    desc: "Strategy & innovation",
    link: "/services/consulting",
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-red-500" />,
    title: "Cybersecurity",
    desc: "Secure architecture",
    link: "/services/cybersecurity",
  },
  {
    icon: <ChartBarIcon className="h-10 w-10 text-purple-600" />,
    title: "Data Analytics",
    desc: "Insights & dashboards",
    link: "/services/data-analytics",
  },
  {
    icon: <PaintBrushIcon className="h-10 w-10 text-pink-500" />,
    title: "UI/UX Design",
    desc: "User-centered design",
    link: "/services/ui-ux",
  },
  {
    icon: <CpuChipIcon className="h-10 w-10 text-emerald-500" />,
    title: "Automation & RPA",
    desc: "Process automation",
    link: "/services/automation",
  },

];

const slides = [
  {
    img: caro1, // Update to correct path
    title: "Welcome to Majesstystays",
    subtitle: "AI-powered Real Estate Discovery with Aryahs World Infotech",
    button1: "Read More",
    button2: "Contact Now",
  },
  {
    img: CareerGenAi, // Make sure this image exists in your assets
    title: "Welcome to CareerGenAI",
    subtitle: "AI-powered Career Guidance using LLMs and Resume Intelligence",
    button1: "Explore Now",
    button2: "Get Started",
  },
  {
    img: GenAi, // Replace with actual image if needed
    title: "Welcome to GenAI",
    subtitle: "AI-based School Inspection for Food, Sanitation, and Wellness Monitoring",
    button1: "Explore GenAI",
    button2: "Contact Us",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Carousel */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          effect="fade"
          className="w-full h-[80vh]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img src={slide.img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center pl-12">
                  <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-3xl md:text-5xl font-extrabold text-white max-w-4xl">
                    {slide.title}
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-lg text-gray-200 mt-4 max-w-2xl">
                    {slide.subtitle}
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }} className="mt-6 flex gap-4 flex-wrap">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold">{slide.button1}</button>
                    <button className="bg-white hover:bg-gray-200 text-green-700 px-6 py-2 rounded-full font-semibold">{slide.button2}</button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>
          {`
            .swiper-button-prev,
            .swiper-button-next {
              display: none !important;
            }
            .swiper-pagination-bullet {
              background: white;
              opacity: 0.6;
            }
            .swiper-pagination-bullet-active {
              background: #00ff99;
              opacity: 1;
            }
          `}
        </style>
      </div>

      {/* About Section */}
      <section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-green-50 via-white to-gray-100 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20 top-0 -left-10 animate-blob z-0" />
        <div className="absolute w-80 h-80 bg-purple-100 rounded-full filter blur-2xl opacity-20 bottom-0 -right-10 animate-blob animation-delay-3000 z-0" />

        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">About Aryahs</h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Aryahs World is a multi-venture tech organization striving to bring smart, AI-driven, and scalable solutions to life through our subsidiaries. <br />
            <span className="font-semibold">Founded by Mr. Aryan & Ms. Ahana</span> – driven leaders with a passion for innovation.
          </p>
          <button className="mt-6 px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
            Read More
          </button>
        </motion.div>

        {/* Founder Cards */}
        <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Founder 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <img
              src={caro1} // Replace with actual image path
              alt="Mr. Aryan"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Mr. Aryan</h3>
            <p className="text-sm text-gray-600 mt-2">
              M.Tech CSE (San Francisco)<br />AI & Data Science Expert<br />Founder of Majesstystays
            </p>
          </motion.div>

          {/* Founder 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <img
              src={caro2} // Replace with actual image path
              alt="Ms. Ahana"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Ms. Ahana</h3>
            <p className="text-sm text-gray-600 mt-2">
              Co-Founder & Creative Head<br />Visionary Leader<br />Driving Business Innovation
            </p>
          </motion.div>
        </div>
      </section>


      {/* Our Services */}
      <section className="py-20 px-4 md:px-20 bg-gradient-to-r from-[#f0f4ff] to-[#e4f9f5] relative overflow-hidden">
        <h2
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          data-aos="fade-down"
        >
          💼 Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Majesstystays",
              desc: "AI-powered real estate recommendations.",
              tech: "AI + Real Estate",
              img: caro2,
              link: "https://majesstystays.in", // Replace with actual live URL
            },
            {
              name: "CareerGenAI",
              desc: "AI-powered career guidance platform using LLMs and resume intelligence.",
              tech: "AI, NLP, Web",
              img: CareerGenAi, // Update to correct image path
              link: "https://careergenai.in", // Actual live website
            },
            {
              name: "GenAI",
              desc: "An AI-powered school inspection platform for food quality, sanitation, and student wellness monitoring.",
              tech: "AI, Computer Vision, Public Sector",
              img: GenAi, // Replace with your actual image path
              link: "/projects/genai",  // Or actual live link if deployed
            }
            ,
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-52 object-cover rounded-t-2xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-2">{service.desc}</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {service.tech}
                </span>
                <div className="mt-4">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm shadow-md transition duration-300"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative BG Blobs */}
        <div className="absolute top-10 left-[-50px] w-[300px] h-[300px] bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[-50px] right-[-60px] w-[250px] h-[250px] bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </section>


      {/* core capabilities  */}

      <section className="py-20 bg-gradient-to-r from-[#f8fbff] to-[#ecfdf5] px-4 md:px-20 relative overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" data-aos="fade-down">
          🌟 Core Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {capabilities.map((cap, i) => (
            <a
              key={i}
              href={cap.link}
              className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 shadow-xl rounded-xl hover:shadow-2xl hover:scale-105 transition duration-300 block"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex justify-center mb-3">{cap.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800">{cap.title}</h4>
              <p className="text-gray-500 text-sm mt-1">{cap.desc}</p>
            </a>
          ))}
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-[-50px] left-[-60px] w-[250px] h-[250px] bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-[250px] h-[250px] bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </section>


      {/*Our Projects */}
      <section className="py-20 px-4 md:px-20 bg-gradient-to-br from-[#f7faff] via-[#edf7ff] to-[#fdfdfd]">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "CareerGenAI",
              desc: "AI-powered career platform for Gen Z job seekers.",
              tech: "GenAI, NLP, Resume Intelligence",
              img: CareerGenAi,
            },
            {
              name: "GenAI",
              desc: "AI platform for school-level food, sanitation & wellness inspections.",
              tech: "Computer Vision, AI, Education",
              img: GenAi,
            },
            {
              name: "AI-based Security System for 6G Wireless Network",
              desc: "Secure data transmission for 6G IoT environments — Coming Soon!",
              tech: "Federated Learning, Intrusion Detection",
              img: G,
              comingSoon: true,
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 border border-gray-200 ${project.comingSoon ? "opacity-80" : ""
                }`}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-3">{project.desc}</p>
                <p className="text-indigo-600 font-medium">{project.tech}</p>
              </div>
              {project.comingSoon && (
                <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg transition-all duration-300 shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            See All Projects
          </button>
        </div>
      </section>


      {/* Client Testimonials */}
      <section className="py-20 px-4 md:px-20 bg-gradient-to-r from-[#fdfbff] to-[#f3fcf8] text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-14 text-gray-800" data-aos="fade-down">
          💬 Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["Ankit Sharma", "StartupX", "Aryahs delivered beyond expectations!"],
            ["Pooja Mehta", "GreenTech", "Loved the AI implementation."],
            ["Ravi Kumar", "TechNova", "Professional and responsive team!"],
          ].map(([name, company, review], i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-left"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <p className="italic text-gray-700 text-lg leading-relaxed">“{review}”</p>
              <hr className="my-4 border-gray-200" />
              <p className="font-semibold text-gray-800">{name}</p>
              <p className="text-sm text-gray-500">{company}</p>
            </div>
          ))}
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-[-60px] left-[-60px] w-[300px] h-[300px] bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      </section>


      {/* Contact Section */}
<section className="py-24 px-4 md:px-20 bg-gradient-to-br from-[#f9f9f9] via-[#f4fefd] to-white">
  <div className="text-center mb-16" data-aos="fade-down">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">📬 Get in Touch</h2>
    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
      We'd love to hear from you. Whether you have a question about services or want to collaborate — drop us a message.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* Left: Form */}
    <div data-aos="fade-right">
      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Your Message</label>
          <textarea
            placeholder="Type your message"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold shadow-lg transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Right: Google Map */}
    <div
      data-aos="fade-left"
      className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-200"
    >
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
  </div>
</section>


    </div>
  );
};

export default Home;
