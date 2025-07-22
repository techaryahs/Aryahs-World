import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function TopInfoBar() {
  return (
    <div className="bg-green-900 text-white text-sm px-4 py-2 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:info.aryahs@gmail.com"
            className="flex items-center gap-1 hover:underline"
          >
            <FaEnvelope />
            info.aryahs@gmail.com
          </a>

          <span className="flex items-center gap-1">
            <FaPhoneAlt />
            <span className="flex gap-2">
              <a href="tel:+918657869659" className="hover:underline">
                8657869659
              </a>
              /
              <a href="tel:+919619901999" className="hover:underline">
                9619901999
              </a>
              /
              <a href="tel:+919819112999" className="hover:underline">
                9819112999
              </a>
            </span>
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-lg">
          <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-400"><FaYoutube /></a>
          <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
}

export default TopInfoBar;
