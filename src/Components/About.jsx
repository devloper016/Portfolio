import React from "react";
import Fade from "react-awesome-reveal";
import img from "../assets/about.svg";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";

const About = () => {
  return (
    <Fade>
      <div name="about" className="w-full h-screen text-gray-300 ">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline">About Me</p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <img
                src={img}
                alt="hero"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={500}
                height={500}
              />
            </div>

            <div className="padin">
              <p>
                I am a full-stack developer with a passion for building web
                applications and learning new technologies. I have completed
                B.Tech in Computer Science and Engineering from
                National Institute of Technology Hamirpur and currently working in MAQ Software. My hobbies are:
                <ul>
                  <li>
                    {" "}
                    <DoubleArrowRoundedIcon>
                    </DoubleArrowRoundedIcon>
                    Playing Games
                  </li>
                  <li>
                  <DoubleArrowRoundedIcon></DoubleArrowRoundedIcon>
                  Reading Novels
                  </li>
                  <li>
                  <DoubleArrowRoundedIcon></DoubleArrowRoundedIcon>
                  Anime
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <a
                href="https://devloper016.github.io/Resume/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover: shadow-violet-500 text-white mt-3"
              >
                <span className="block bg-slate-800 hover:bg-violet-500 rounded-full px-5 py-2">
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
