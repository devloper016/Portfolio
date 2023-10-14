import React from 'react'
import { Link } from 'react-scroll'
function NavLink() {
  return (
    <div className="menu  md:block md:w-auto" id="navbar">
    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-cyan-500 cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-cyan-500 cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-cyan-500 cursor-pointer"
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-cyan-500 cursor-pointer"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-cyan-500 cursor-pointer"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true} 
          duration={500}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-cyan-500 cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default NavLink