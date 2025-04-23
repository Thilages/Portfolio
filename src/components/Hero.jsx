import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaArrowDownShortWide } from "react-icons/fa6";

const roles = ["Web Developer", "3D Developer", "Python Developer", "UI/UX Designer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      style={{ willChange: "transform, opacity" }}
      className="relative w-full h-screen overflow-x-hidden snap-start snap-always"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={containerVariants} // Apply staggered animation
    >
      <Navbar />
      <main className="flex flex-col px-5 md:px-16 lg:px-24">
        {/* Name Intro */}
        <motion.div style={{ willChange: "transform, opacity" }} className="flex mt-[20vh] items-center" variants={itemVariants}>
          <span className="w-[6vw] h-0 border border-[#5954b5]" />
          <div className="font-Outfit font-medium text-lg ml-2 max-sm:text-sm text-[#5954b5]">
            Thilagesh Waran
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          style={{ willChange: "transform, opacity" }}
          className="text-black text-4xl font-semibold md:text-6xl mt-5 font-Outfit"
          variants={itemVariants}
        >
          Hello, my
          <span className="block mt-2">name's Thilagesh.</span>
        </motion.div>

        {/* Animated Role */}
        <motion.div style={{ willChange: "transform, opacity" }} className="flex justify-start items-center max-w-md mt-6" variants={itemVariants}>
          <motion.div style={{ willChange: "transform, opacity" }}
            className="w-fit px-2 py-2 rounded-md bg-[#5954b5]"
            key={roleIndex} // Re-render on role change
            initial={{ rotateX: 270, originY: 0.5 }} // Start position
            animate={{ rotateX: 360 }} // Rotate vertically around X-axis
            transition={{ duration: 0.4 }}
          >
            <motion.div style={{ willChange: "transform, opacity" }}
              className="text-md md:text-xl lg:text-2xl text-white font-Outfit relative"
              key={roleIndex} // Re-render inner text when role changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {roles[roleIndex]}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Section */}
        <motion.div style={{ willChange: "transform, opacity" }}
          className="flex items-center absolute font-Outfit text-gray-700 bottom-[10vh]"
          variants={itemVariants}
        >
          <div className="w-12 h-12 flex rounded-full justify-center items-center bg-white drop-shadow-2xl shadow mr-2">
            <FaArrowDownShortWide size={18} />
          </div>
          scroll down
        </motion.div>
      </main>
    </motion.section>
  );
};

export default Hero;
