import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import img from "../assets/hero.svg";
import Link from "react-scroll";

export const HeroSection = () => {
  return (
    <section className="h-screen w-full " id="home">
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-3xl sm:text-3xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
                Hello, I&apos;m Aditya{" "}
              </span>
              <br></br>
              <TypeAnimation
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500"
                sequence={[
                  "Web Developer",
                  1000,
                  "Comptetive Programmer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              I'm currently pursuing my B.Tech in Computer Science and
              Engineering from NIT Hamirpur.
            </p>
            <br />
            <div>
              {/* <Link
              to="#about"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <img
                src={img}
                alt="hero"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={1000}
                height={1000}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
