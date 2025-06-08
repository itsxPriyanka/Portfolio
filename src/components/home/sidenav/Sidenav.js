import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Chatting Applications</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Backend Setup</li>
        <li className="sidenavLi">Amazon Clone</li>
        <li className="sidenavLi">LinkedIn AI Reply Chrome Extension</li>
        <li className="sidenavLi">Web Scraping Tool</li>
        <li className="sidenavLi">Admin App</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Work" />
      <ul>
        <li className="sidenavLi">Designed and developed multiple web applications</li>
        <li className="sidenavLi">Created responsive UI/UX for various platforms</li>
        <li className="sidenavLi">Built full-stack applications with modern frameworks</li>
        <li className="sidenavLi">Developed automation and integration workflows</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">itsxpriyanka80@gmail.com</li>
        
        <li className="sidenavLi">
          <a href="https://www.linkedin.com/in/priyanka-kumari02/" target="_blank" className="flex items-center gap-2">
            <FaLinkedin className="text-blue-600" /> LinkedIn
          </a>
        </li>
        <li className="sidenavLi">
          <a href="https://github.com/itsxPriyanka" target="_blank" className="flex items-center gap-2">
            <FaGithub className="text-gray-800" /> GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
