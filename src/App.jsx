import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {HeroSection} from "./Components/HeroSection";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education"
import Skills from "./Components/Skills";
import Particle from "./Components/Particle";
import Project from "./Components/Projects/Projects"
import ProjectDetails from "./Components/Projects/ProjectDetails";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);`

export default function () {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Particle/>
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <About/>
      <Education></Education>
      <Skills></Skills> 
      <Project openModal={openModal} setOpenModal={setOpenModal}></Project>
      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
          <Contact></Contact>
    </div>
    <Footer></Footer>
  </main>
  )
}
