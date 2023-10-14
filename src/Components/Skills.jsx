import styled from "styled-components";
import {next,cpp,css,express,git,html,javascript,firebase,github,linux,mongodb,nodejs,python,react,tailwind,typescript} from '../assets/Imagemodule'

import { Fade } from "react-awesome-reveal";

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 30px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Skills = () => {
  return (
    <Fade>
      <div name="skills" className="h-full mb-48 pt-11">
        <Title>Skills</Title>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 w-full text-gray-300">
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={html} alt="html" />
              <p className="my-4 group-hover:text-violet-700">HTML</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={css} alt="css" />
              <p className="my-4 group-hover:text-violet-700">CSS</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={javascript} alt="Javascript" />
              <p className="my-4 group-hover:text-violet-700">Javascript</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={react} alt="react" />
              <p className="my-4 group-hover:text-violet-700">React</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={next} alt="next" />
              <p className="my-4 group-hover:text-violet-700">Next</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={typescript} alt="TypeScript" />
              <p className="my-4 group-hover:text-violet-700">Typescript</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={tailwind} alt="tailwind" />
              <p className="my-4 group-hover:text-violet-700">Tailwind</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={mongodb} alt="mongodb" />
              <p className="my-4 group-hover:text-violet-700">MongoDb</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={nodejs} alt="node" />
              <p className="my-4 group-hover:text-violet-700">Node</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={express} alt="express" />
              <p className="my-4 group-hover:text-violet-700">Express</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={cpp} alt="cpp" />
              <p className="my-4 group-hover:text-violet-700">C++</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={python} alt="python" />
              <p className="my-4 group-hover:text-violet-700">Python</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={firebase} alt="firebase" />
              <p className="my-4 group-hover:text-violet-700">Firebase</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={git} alt="Git" />
              <p className="my-4 group-hover:text-violet-700">Git</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={github} alt="github" />
              <p className="my-4 group-hover:text-violet-700">Github</p>
            </div>
            <div className="group shadow-md shadow-[#040c16] hover:shadow-violet-700 hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={linux} alt="linux" />
              <p className="my-4 group-hover:text-violet-700">Linux</p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </Fade>
  );
};

export default Skills;
