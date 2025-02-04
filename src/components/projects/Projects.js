import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";


const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Web Scraping Tool"
            category="Python, Flask"
            link="https://github.com/itsxPriyanka/web-scraping"
            image={workImgOne}
          />
          <ProjectsCard
            title="LinkedIn AI Reply Chrome Extension"
            category="React.js, TypeScript"
            link="https://github.com/itsxPriyanka/linkedin-ai-reply_chrome_extension"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Admin App"
            category="React.js, Node.js, AWS"
            link="https://github.com/itsxPriyanka/Admin-App"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Blog Website"
            category="Website"
            link="#"
            image={workImgFour}
          />
          <ProjectsCard
            title="Business Card Design"
            category="Design"
            link="#"
            image={workImgSeven}
          />
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            link="#"
            image={workImgSix}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;













