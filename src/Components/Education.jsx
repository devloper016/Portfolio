import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { TimelineDot } from "@mui/lab";
import TimelineContent from "@mui/lab/TimelineContent";
import styled from "styled-components";
import { education } from "../data";
import EducationCard from "../Cards/EducationCards";
import { Fade } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: left;
  font-weight: 600;
  margin-top: 30px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 660px) {
    align-items: end;
  }
`;

const index = () => {
  return (
    <Fade cascade>
      <section id="education" className="mb-48" >
        <Container>
          <Wrapper>
            <Title>Education</Title>
            <TimelineSection>
              {education.map((edu,index) => {
                return (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <EducationCard education={edu} />
                      </TimelineContent>
                  </TimelineItem>
                );
              })}
            </TimelineSection>
          </Wrapper>
        </Container>
      </section>
    </Fade>
  );
};

export default index;
