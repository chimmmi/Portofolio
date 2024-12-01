import React from "react";

type ProjectProps = {
  title: string;
  siteSrc: string;
  imgSrc: string;
  description?: string;
};

const Project: React.FC<ProjectProps> = ({
  siteSrc,
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className="flex justify-center gap-12">
      <a href={siteSrc} target="_blank" rel="noopener noreferrer">
        <h1 className="text-[3rem] text-center font-bold">{title}</h1>
        <div>
          <p className="text-center mt-3 font-light">{description}</p>
        </div>
        <hr className="w-[40%] m-auto mt-5 pb-5"/>
        <img
          src={imgSrc}
          className="w-[130vh] opacity-50 hover:opacity-80 transition-opacity duration-500"
          alt={`${title} project`}
        />
      </a>
    </div>
  );
};

export default Project;
