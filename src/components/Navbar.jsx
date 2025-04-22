import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { linkedin, github } from "../../constant"; 

const Navbar = () => {
  return (
    <div className="flex text-sm md:text-lg lg:text-xl items-center px-5 py-4 md:py-8 md:px-8 font-Outfit gap-10 text-gray-400">
      {/* LinkedIn Link */}
      <a
        href={linkedin}
        target="_blank"
        className="flex items-center hover:text-gray-600 hover:cursor-pointer transition-colors duration-300 ease-in-out"
      >
        <BsLinkedin className="mr-4" />
        LinkedIn
      </a>

      {/* Github Link */}
      <a
        href={github}
        target="_blank"
        className="flex items-center hover:text-gray-600 hover:cursor-pointer transition-colors duration-300 ease-in-out"
      >
        <FaGithubSquare className="mr-4" size={22} />
        Github
      </a>
    </div>
  );
};

export default Navbar;
