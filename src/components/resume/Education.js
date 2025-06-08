import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      {/* Experience Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="12/2024 – 01/2025"
          title="Backend - Automations & Integrations Engineer"
          subTitle="Unifize"
          des="Automated workflows using Clojure, reducing manual effort by 40%. Integrated third-party apps like SAP & Salesforce, and optimized system efficiency."
        />
        <ResumeCard
          badge="03/2024 – 11/2024"
          title="Full Stack Developer Intern"
          subTitle="Space Energy System"
          des="Built responsive ReactJS interfaces, improved security with JWT authentication, and optimized backend efficiency using AWS & MongoDB."
        />
      </div>

      {/* Vertical Divider */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Education Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2020 – 2024"
          title="B.Tech - Computer Science and Engineering"
          subTitle="MVJ College of Engineering, Bangalore"
          des="CGPA: 8.3"
        />
        <ResumeCard
          badge="2018 – 2020"
          title="PUC - PCMC (Physics, Chemistry, Math, Computer Science)"
          subTitle="Jyoti Nivas Pre-University, Bangalore"
          des="CGPA: 8.5"
        />
        <ResumeCard
          badge="2017 – 2018"
          title="10th Grade"
          subTitle="Kaveri Gnana Mithra School, Bangalore"
          des="CGPA: 8.8"
        />
      </div>
    </div>
  );
};

export default Education;
