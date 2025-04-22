import React, { useState } from 'react';
import { motion } from "framer-motion";
// Import icons (choose the ones you need)
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { github, linkedin } from '../../constant';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  const [trolltext, settrolltext] = useState("Contact me")

  const yourName = "Thilagesh";
  const yourEmail = "thilagesh030205";
  const socialLinks = [
    { icon: FaGithub, url: github, label: 'GitHub' },
    { icon: FaLinkedin, url: linkedin, label: 'LinkedIn' },

  ];
  // --- END CUSTOMIZATION ---

  const handleTroll = () => {
    settrolltext("Nah this is for Asthetics")

    setTimeout(() => {
      settrolltext("Try the below one")
      setTimeout(() => {
        settrolltext("Contact me :)")
      }, 1000)
    }, 2000)

  }

  const titleVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "backInOut" } }
  };

  const lineVariant = (direction = 'left') => ({
    hidden: { x: direction === 'left' ? -300 : 300, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }
  });

  const contentVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3, ease: "easeOut" } }
  };

  const footerVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5, ease: "easeOut" } }
  }

  return (
    // Use a section tag for semantic meaning and add an ID for potential navigation
    // Adjusted padding and background for light theme
    <section
      id="contact"
      className='snap-start flex flex-col font-Outfit justify-center items-center w-full min-h-screen py-16 md:py-20 bg-gray-50 text-gray-800 overflow-hidden' // Reduced md:py, set light bg/text
    >

      {/* --- Animated Title --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Animate only once
        className='flex justify-center items-center w-full max-w-4xl px-4 mb-10 md:mb-12' // Added margin-bottom
      >
        <motion.div
          variants={lineVariant('left')}
          className='border border-gray-400 w-full' // Light border
        ></motion.div>
        <motion.div
          onClick={() => handleTroll()}
          variants={titleVariant}
          className='mx-4 sm:mx-8 whitespace-nowrap font-Outfit text-2xl sm:text-4xl gradient py-3 px-6 rounded-md text-white block shadow-lg' // Adjusted margins/size slightly
        >
          {trolltext}
        </motion.div>
        <motion.div
          variants={lineVariant('right')}
          className='border border-gray-400 w-full' // Light border
        ></motion.div>
      </motion.div>

      {/* --- Main Contact Content --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={contentVariant}
        className='text-center px-4 max-w-xl' // Slightly reduced max-width for content block
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-3 font-Outfit">Get In Touch</h3>
        <p className="text-md md:text-lg text-gray-600 mb-6">
          Have a question or want to collaborate? Feel free to reach out! The best way to contact me is via email.
        </p>
        <a
          href={`mailto:${yourEmail}`}
          className="inline-flex items-center gap-2 gradient text-white font-medium py-3 px-7 rounded-md hover:opacity-90 transition-opacity duration-300 shadow-md text-base md:text-lg" // Adjusted padding/size
        >
          <FaEnvelope />
          Send Email
        </a>
        {/* You could add a contact form component here instead */}
      </motion.div>

      {/* --- Footer Section --- */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }} // Trigger when footer is halfway visible
        variants={footerVariant}
        className="w-full mt-16 md:mt-20 pt-6 pb-6 border-t border-gray-200" // Adjusted top margin/padding, light border
      >
        <div className="container mx-auto px-4 text-center">
          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 mb-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300" // Removed dark: classes
              >
                <link.icon className="w-6 h-6" /> {/* Standard icon size */}
              </a>
            ))}

          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} {yourName}. All Rights Reserved.
          </p>
        </div>
      </motion.footer>

    </section>
  );
}

export default Contact;