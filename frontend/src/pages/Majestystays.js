import React from "react";
import { motion } from "framer-motion";

const MajestyStays = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center"
      >
        Majesty Stays
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 text-xl md:text-2xl text-center"
      >
        Coming Soon 🚀
      </motion.p>
    </div>
  );
};

export default MajestyStays;
