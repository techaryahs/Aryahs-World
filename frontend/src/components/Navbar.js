import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import logo from '../assets/logo.png'

const Navbar = ({ onEnquiryClick }) => {
  const [showTopInfo, setShowTopInfo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowTopInfo(window.scrollY < 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="relative">
      <nav
        className={`w-full z-50 bg-white shadow-md transition-all duration-500 ease-in-out ${
          showTopInfo ? "" : "fixed top-0 animate-fadeInDown"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
          {/* Logo */}
          <div className="w-16 md:w-20">
            <Link to="/">
              <img
                src={logo}
                alt="Aryahs Logo"
                className="h-full w-full object-contain"
              />
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              className={`text-gray-800 text-3xl transition-transform duration-300 ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`w-full md:flex md:items-center md:gap-8 md:w-auto mt-3 md:mt-0 overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "block animate-slideDown" : "hidden md:block"
            }`}
          >
            {navItems.map((item, i) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block md:inline-block font-medium px-3 py-2 transition-colors duration-200 delay-[${i * 100}ms] ${
                  location.pathname === item.path
                    ? "text-green-700 font-semibold border-b-2 border-green-700"
                    : "text-gray-800 hover:text-green-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Enquiry Now Button (popup trigger) */}
            <button
              onClick={() => {
                setMenuOpen(false);
                onEnquiryClick(); // ✅ trigger modal
              }}
              className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 mt-3 md:mt-0"
            >
              Enquiry Now
            </button>
          </div>
        </div>
      </nav>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-10%);
            }
            100% {
              opacity: 1;
              transform: translateY(0%);
            }
          }

          .animate-fadeInDown {
            animation: fadeInDown 0.4s ease-out;
          }

          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
