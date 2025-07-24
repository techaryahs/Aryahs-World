import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary  text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed text-justify">
            Aryahs World Infotech (OPC) Pvt Ltd., a dynamic hub of innovation hosting a range of forward-thinking startups. Led by the visionary minds of Mr. Aryan and Ms. Ahana, each venture within our ecosystem is dedicated to revolutionizing its industry through cutting-edge technology. Mr. Aryan, armed with a Master's degree in Computer Science Engineering from San Francisco, drives the technological innovation behind Majesstystays. His expertise in AI and data science ensures personalized property recommendations tailored to users' preferences, setting new standards in the real estate industry.
            <br />
            <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-yellow-400 hover:underline">Read More...</Link>
          </p>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Menu</h2>
          <ul onClick={() => window.scrollTo(0, 0)} className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              Plot No 80 and 81, Sector 18 Nerul, Navi Mumbai 400706.
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              +91 8657869659 / 9619901999 / 9819112999
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              info.aryahs@gmail.com
            </li>
            <li className="flex gap-3 text-lg mt-2">
              <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
              <a href="#" className="hover:text-yellow-400"><FaYoutube /></a>
              <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
              <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-xs text-white bg-primary ">
        <p className="text-sm text-gray-200 text-center mt-1">
          © {new Date().getFullYear()} Aryahs World Infotech (OPC) Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
