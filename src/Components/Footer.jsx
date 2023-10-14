import React from "react";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import leetcode from "../assets/images/leetcode.png";
import Fade from "react-awesome-reveal"

const Footer = () => {
  return (
    <Fade>
      <div className="w-full max-w-1000xp flex flex-col justify-center items-center text-gray-300 font-bold pt-40 pb-10">
        <div className="p-4 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/aditya-tiwari-438087203/"
            target="_blank"
          >
            <img
              src={linkedin}
              className="w-10 mx-3 hover:-translate-y-1 duration-300"
              alt="logo"
            />
            </a>
          <a href="https://github.com/devloper016" target="_blank">
            <img
              src={github}
              className="w-10 mx-3 hover:-translate-y-1 duration-300"
              alt="logo"
            />
          </a>
          <a href="https://leetcode.com/Aditya_02/" target="_blank">
            <img
              src={leetcode}
              className="w-10 mx-3 hover:-translate-y-1 duration-300"
              alt="logo"
            />
          </a>
        </div>
        <div className="p-4">
          <p className="text-center">Nothing is Reserved @Aditya Tiwari</p>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;