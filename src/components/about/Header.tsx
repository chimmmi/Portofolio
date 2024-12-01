import styles from "./Header.module.css";
import { FaGreaterThan } from "react-icons/fa6";
import IconCloud from "../ui/icon-cloud";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`${styles.headerContainer} shadow-2xl`}>
      <div className="flex flex-wrap justify-center items-center text-white pt-6 gap-12 z-0">
        <img
          src="/profile.jpg"
          alt="Profile picture of Chime Tsegon"
          className="w-[25rem] h-[28rem] p-10 mt-14 z-10"
        />
        <div className="flex flex-col w-[40rem] z-50 gap-6">
          <h1 className="z-50 font-extralight">
            <FaGreaterThan className="inline mb-1 font-extralight z-0" size={16} /> About me
          </h1>
          <p className="leading-7">
            Hi, I'm Chime Tsegon. I'm 20 years old, from Brazil, with Bhutanese roots. My web
            development journey began when I taught myself programming, starting with Harvard's CS50
            course. This introduction got me excited about creating things online, and I became
            serious about pursuing web development as a career. To get a proper education, I moved
            to Perth, Australia, where I completed a Certificate IV in Web Development. I'm now
            working on my diploma in Front-End Web Development. I’m passionate about web
            development. I love learning new things, solving problems, coming up with good designs,
            working in a team, and the satisfaction of completing projects. These are the things
            that keep me motivated and make me love this field.
          </p>
        </div>
      </div>
      <img
        src="/moonlight.svg"
        alt="Moonlight illustration"
        className="absolute w-[24rem] top-[7%] right-[27%] opacity-20 z-0"
      />
      <IconCloudDemo />
    </div>
  );
}

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "firebase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "sass",
  "tailwindcss",
];

function IconCloudDemo() {
  return (
    <div className="w-[25rem] md:ml-[50%] pb-[6rem] -mt-24">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Header;
