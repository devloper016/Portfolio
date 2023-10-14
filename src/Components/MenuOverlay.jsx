import React from "react";
import { Link } from "react-scroll";

const MenuOverlay = () => {
  return (
      <ul className="flex flex-col py-4 items-center">
        <li>
          <Link
            to="home"
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-violet-500 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-violet-500 cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="education"
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-violet-500 cursor-pointer"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-violet-500 cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-violet-500 cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-violet-500 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
  );
};

export default MenuOverlay;
