import React from 'react';
import { BorderBeam } from './ui/border-beam';

interface ProjectProps {
  siteSrc: string;
  imgSrc: string;
  title: string;
  r: string; 
}

const Project: React.FC<ProjectProps> = ({ siteSrc, imgSrc, title, r }) => {
  return (
    <div>
      <h1 className={`absolute right-[${r}%] text-[3rem] font-light z-10`}>
        {title} <br />
        <span className="font-extralight">Project</span>
      </h1>
      <div className="cursor-pointer">
        <a href={siteSrc} target="_blank" rel="noopener noreferrer">
        
          <img
            src={imgSrc}
            className="w-[50rem] opacity-50 hover:opacity-80 transition-opacity duration-500"
            alt={`${title} project`}
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
