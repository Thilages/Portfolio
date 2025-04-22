import React from "react";
import { motion } from "framer-motion";
import { FiMonitor, FiLayers, FiCode, FiEdit } from "react-icons/fi";
import { FaReact, FaPython, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBlender, SiAdobephotoshop, SiThreedotjs, SiSelenium } from "react-icons/si";
const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };


  const services = [
    {
      icon: <FiMonitor size={28} />,
      description:
        "I develop modern, scalable web applications using the latest frameworks and technologies to ensure seamless functionality and performance.",
      title: "Web Development",
      number: "01",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      tools: [
        { icon: <FaReact size={24} /> },
        { icon: <RiTailwindCssFill size={24} /> },

      ],
    },
    {
      icon: <FiLayers size={28} />,
      description:
        "I create immersive 3D experiences for web and applications, leveraging the latest in 3D technologies to bring your ideas to life.",
      title: "3D Development",
      number: "02",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
      tools: [
        { icon: <SiBlender size={24} /> },
        { icon: <SiThreedotjs size={24} /> },

      ],
    },
    {
      icon: <FiCode size={28} />,
      description:
        "I specialize in writing efficient Python scripts for automation, data analysis, and backend development, tailored to your specific needs.",
      title: "Python Scripting",
      number: "03",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
      tools: [
        { icon: <FaPython size={24} /> },
        { icon: <SiSelenium size={24} /> },
      ],
    },
    {
      icon: <FiEdit size={28} />,
      description:
        "I design intuitive and user-centric interfaces to deliver exceptional user experiences, ensuring your product is both functional and delightful.",
      title: "UX/UI Design",
      number: "04",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
      tools: [
        { icon: <FaFigma size={24} /> },
        { icon: <SiAdobephotoshop size={24} /> },
        { icon: <i className="devicon-sketch-line colored"></i>, name: "Sketch" },
      ],
    },
  ];

  return (
    <motion.div
      initial="hidden"

      variants={containerVariants}
      whileInView="visible"
      viewport={{ amount: 0.3 }}

      className="w-screen flex items-center snap-start overflow-y-scroll scrollbar px-5 md:px-8 py-5 md:py-8 bg-gray-100 flex-col"
    >

      <div className="bg-[#8c77f3] rounded-md text-2xl md:text-4xl lg:text-5xl py-5 text-white font-Outfit px-5 md:px-20 md:py-10">
        My mission is to use creativity and technology to build practical,
        engaging digital experiences that make a real difference and resonate
        with people.
      </div>


      <div className="mt-10 flex max-sm:flex-col gap-10 justify-between">

        <div className="text-4xl text-start md:text-left font-Outfit font-medium mb-6 px-4 max-sm:text-center max-sm:text-3xl">
          How Can I Assist You?
        </div>

        <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={containerVariants} className="lg:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-6 font-Outfit">
          {services.map((service) => (
            <motion.div
              key={service.number}
              className="bg-white rounded-lg shadow-md p-6 relative flex flex-col border border-gray-100 h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              variants={childVariants}
            >
              {/* Icon */}
              <div className="flex justify-between items-start">
                <div
                  className={`w-12 h-12 ${service.bgColor} rounded-md flex items-center justify-center mb-4`}
                >
                  <span className={`font-bold text-xl ${service.textColor}`}>
                    {service.icon}
                  </span>
                </div>
                {/*  */}
                <div className={`${service.textColor} flex gap-3 `}>
                  {service.tools.map((icons, index) => <div key={index}>
                    {icons.icon}
                  </div>)}
                </div>
              </div>


              <p className="text-gray-500 text-sm md:text-lg lg:text-xl mb-3 flex-grow">
                {service.description}
              </p>


              <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mt-auto">
                {service.title}
              </h3>


              <div className="absolute bottom-4 right-4 text-gray-300 text-2xl font-medium">
                {service.number}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;

