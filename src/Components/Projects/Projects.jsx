import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectStyle";
import ProjectCard from "../../Cards/ProjectsCards";
import { projects } from "../../data";
import { Fade } from "react-awesome-reveal";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Fade>
      <Container id="projects">
      <Title>Projects</Title>
        <Wrapper>
          <Desc>These are some of the Projects I have worked on.</Desc>
          <ToggleButtonGroup>
            {toggle === "all" ? (
              <ToggleButton active value="all" onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            ) : (
              <ToggleButton value="all" onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            )}
            <Divider />
            {toggle === "React" ? (
              <ToggleButton
                active
                value="React"
                onClick={() => setToggle("React")}
              >
                React
              </ToggleButton>
            ) : (
              <ToggleButton value="React" onClick={() => setToggle("React")}>
                React
              </ToggleButton>
            )}
            <Divider />
            {toggle === "Other" ? (
              <ToggleButton
                active
                value="Other"
                onClick={() => setToggle("Other")}
              >
                Other
              </ToggleButton>
            ) : (
              <ToggleButton value="Other" onClick={() => setToggle("Other")}>
                Other
              </ToggleButton>
            )}
            <Divider />
          </ToggleButtonGroup>
          <CardContainer>
            {toggle === "all" &&
              projects.map((project) => (
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project) => (
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
    </Fade>
  );
};

export default Projects;
