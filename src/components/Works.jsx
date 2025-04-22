import React from 'react';
// Assuming images are correctly placed relative to the public folder or imported
import greenpick from "/assets/greenpick.png"; // Use this if assets is in public
import expenser from "/assets/expenser.jpg";   // Use this if assets is in public
import screensense from "/assets/screensense.png"
import solarsystem from "/assets/solarsystem.png"
import { motion } from "framer-motion";
import { FaReact, FaExternalLinkAlt, FaICursor } from 'react-icons/fa';
import { SiTailwindcss, SiGreensock, SiExpo, SiChartdotjs } from 'react-icons/si';
import { TbDeviceMobileMinus } from 'react-icons/tb';
import { FaPython, FaFileCode } from 'react-icons/fa'; // Icons for Python and PyInstaller

import { FaFeatherPointed } from "react-icons/fa6";
import { SiThreedotjs, SiFramer } from 'react-icons/si';
// Reusable Card component for tech stack items
const Card = ({ name, icon, color }) => {




  return (
    <div
      className="flex justify-center items-center p-1 px-2 rounded-md text-white gap-1 lg:gap-2 text-xs sm:text-sm lg:text-base font-Outfit" // Adjusted text sizes
      style={{ backgroundColor: color }} // Use inline styles for dynamic colors
    >
      <span className="flex-shrink-0">{icon}</span> {/* Prevent icon shrink */}
      <span className="whitespace-nowrap">{name}</span> {/* Prevent wrap */}
    </div>
  );
};

// Animated Button Component (Integrated directly for clarity)
const AnimatedLiveButton = ({ href = '#', color, secondary, site }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        absolute top-3 right-3 z-20
        flex items-center justify-center
         text-white
        rounded-md
        pl-3 pr-3 py-2 lg:pl-4 lg:py-3 
        overflow-hidden 
        transition-all duration-300 ease-in-out 
        hover:text-yellow-400
        
        hover:shadow-md 
        cursor-pointer
      "
      style={{ backgroundColor: color }}
    >
      {/* Icon - always visible */}
      <FaExternalLinkAlt className="flex-shrink-0" />

      {/* Text Container - Animates width and opacity on LG+ screens */}
      <div
        className="
          font-Outfit whitespace-nowrap 
          max-w-0 opacity-0 
          transition-all duration-300 ease-in-out delay-100 
          
          lg:group-hover:max-w-xs lg:group-hover:opacity-100 lg:group-hover:ml-2 
        "
      >
        {site ? "Live demo" : "Get code"}
      </div>
    </a>
  );
};


const Works = () => {
  // Define tech stacks
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
    hidden: { x: -250, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const webTech = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' }, // Example: Add specific colors maybe?
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
    { name: 'Typed.js', icon: <FaICursor /> }, // Default color will be used
    { name: 'GSAP', icon: <SiGreensock />, color: '#88CE02' },
  ];
  const mobileTech = [
    { name: 'React Native', icon: <TbDeviceMobileMinus size={20} />, color: '#61DAFB' },
    { name: 'Expo', icon: <SiExpo size={16} /> },
    { name: 'Chart.js', icon: <SiChartdotjs />, color: '#FF6384' },
  ];
  const pythonTech = [
    { name: 'Python', icon: <FaPython />, color: '#3776AB' }, // Python's official color
    { name: 'Tkinter', icon: <FaFeatherPointed />, color: '#FFDE57' }, // Representative color for Tkinter
    { name: 'PyInstaller', icon: <FaFileCode />, color: '#4CAF50' }, // Green for executable creation
  ];

  const webAnimationTech = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' }, // React's official color
    { name: 'Three.js', icon: <SiThreedotjs />, color: '#000000' }, // Black for Three.js
    { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF' }, // Blue for Framer Motion
  ];



  // Project Data



  return (
    // Use min-h-screen to ensure it takes at least full height but can grow
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={containerVariants}
      className='w-full min-h-screen snap-start 
                  overflow-y-auto scrollbar px-4 py-6 sm:px-6 
                  md:px-8 lg:py-8 bg-gray-100 flex flex-col'>

      {/* Header Section */}
      <motion.div variants={itemVariants} className='w-full flex flex-col md:flex-row justify-between md:items-end gap-2 mb-8 md:mb-10 lg:mb-12 text-gray-500'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-left font-Outfit font-semibold text-gray-700'>
          Selected Works
        </h1>
        <p className='font-Outfit text-sm md:text-base text-right md:text-left'>
          I create projects that are legit and keep me hyped.
        </p>
      </motion.div>

      <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={containerVariants} className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8 flex-grow'>

        {/*greenpick  */}
        <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={itemVariants} className='md:col-span-2 w-full h-fit p-4 md:p-5 relative rounded-lg shadow-lg bg-white border border-gray-200'>
          <AnimatedLiveButton href="https://green-pick.vercel.app/" color={"#628356"} site />

          <div className='relative rounded-md overflow-hidden mb-4 shadow-inner'>
            <img src={greenpick} alt="GreenPick Project Screenshot" className='w-full h-auto object-cover display-block rounded-md' />
          </div>

          <div className='flex w-full justify-between items-center mb-3'>
            <h2 className='font-Outfit text-2xl md:text-3xl text-[#628356] font-medium'>
              GreenPick
            </h2>
            <div className='text-gray-300 font-mono text-xl md:text-2xl'>01</div>
          </div>

          <div className='flex flex-wrap gap-2 w-full'>
            {webTech.map((tech, index) => (
              <Card name={tech.name} icon={tech.icon} key={`web-${index}`} color={"#628356"} />
            ))}
          </div>
        </motion.div>

        {/* Expenser */}
        <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={itemVariants} className='w-full  h-full col-span-1 p-4 md:p-5 relative rounded-lg shadow-lg bg-white border border-gray-200 flex flex-col'>

          <AnimatedLiveButton href="https://github.com/Thilages/Expenser" color={"#2d5c56"} />

          <div className='relative rounded-md overflow-hidden mb-4 shadow-inner flex-grow flex justify-center items-center bg-gray-50 p-4'>
            <img src={expenser} alt="Expenser Project Screenshot" className='max-w-full h-auto object-contain display-block rounded-md' style={{ maxHeight: '400px' }} /> {/* Added max-height example */}
          </div>

          <div className='flex w-full justify-between items-center mb-3 mt-auto'> {/* mt-auto pushes to bottom if card flexes */}
            <h2 className='font-Outfit text-2xl md:text-3xl text-[#2d5c56] font-medium'>
              Expenser
            </h2>
            <div className='text-gray-300 font-mono text-xl md:text-2xl'>02</div>
          </div>

          <div className='flex flex-wrap gap-2 w-full'>
            {mobileTech.map((tech, index) => (
              <Card name={tech.name} icon={tech.icon} key={`mobile-${index}`} color={"#245356"} />
            ))}
          </div>
        </motion.div>

        {/* screensense */}
        <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={itemVariants} className='w-full h-full p-4 md:p-5 relative rounded-lg shadow-lg bg-white border border-gray-200 flex flex-col'>

          <AnimatedLiveButton href="https://github.com/Thilages/screentimeMoniter" color={"#31304d"} />

          <div className='relative rounded-md overflow-hidden mb-4 shadow-inner flex-grow flex justify-center items-center bg-gray-50 p-4'>
            <img src={screensense} alt="Expenser Project Screenshot" className='max-w-full h-auto object-contain display-block rounded-md' style={{ maxHeight: '400px' }} /> {/* Added max-height example */}
          </div>


          <div className='flex w-full justify-between items-center mb-3 mt-auto'> {/* mt-auto pushes to bottom if card flexes */}
            <h2 className='font-Outfit text-2xl md:text-3xl text-[#31304d] font-medium'>
              ScreenSense
            </h2>
            <div className='text-gray-300 font-mono text-xl md:text-2xl'>03</div>
          </div>

          <div className='flex flex-wrap gap-2 w-full'>
            {pythonTech.map((tech, index) => (
              <Card name={tech.name} icon={tech.icon} key={`mobile-${index}`} color={"#31304d"} />
            ))}
          </div>
        </motion.div>

        {/* solarsystem */}
        <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={itemVariants} className='md:col-span-2 w-full h-fit p-4 md:p-5 relative rounded-lg shadow-lg bg-white border border-gray-200'>

          <AnimatedLiveButton href="https://solor-system-nine.vercel.app/" color={"#505663"} site /> {/* Add actual link */}

          <div className='relative rounded-md overflow-hidden mb-4 shadow-inner'>
            <img src={solarsystem} alt="GreenPick Project Screenshot" className='w-full h-auto object-cover display-block rounded-md' />
          </div>

          <div className='flex w-full justify-between items-center mb-3'>
            <h2 className='font-Outfit text-2xl md:text-3xl text-gray-700 font-medium'>
              SolarSystem
            </h2>
            <div className='text-gray-300 font-mono text-xl md:text-2xl'>04</div>
          </div>

          <div className='flex flex-wrap gap-2 w-full'>
            {webAnimationTech.map((tech, index) => (
              <Card name={tech.name} icon={tech.icon} key={`web-${index}`} color={"#505663"} />
            ))}
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Works;