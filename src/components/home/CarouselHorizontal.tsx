import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Project from "../Project";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const projects = [
    {
      title: "BOOM RADIO",
      siteSrc: "https://boom-radio.vercel.app/",
      imgSrc: "/boom-radio-picture.jpg",
      description: "REACT | TAILWINDCSS | GSAP | MOTION",
    },
    {
      title: "Chimefy",
      siteSrc: "https://chimefy.com/",
      imgSrc: "/chimefy.png",
      description: "HTML | SASS | JAVASCRIPT",
    },
    {
      title: "My Album List",
      siteSrc: "https://my-album-list-drab.vercel.app/",
      imgSrc: "/myalbumlist.png",
      description: "REACT | TAILWINDCSS",
    },
    {
      title: "Pizza App",
      siteSrc: "https://pizza-app-jet.vercel.app/",
      imgSrc: "/pizzaapp.png",
      description: "REACT | REDUX | TAILWINDCSS",
    },
    {
      title: "Movie Center",
      siteSrc: "https://movie-app-three-chi-40.vercel.app/",
      imgSrc: "/movieapp.png",
      description: "REACT | CSS",
    },

    {
      title: "Portfolio",
      siteSrc: "/",
      imgSrc: "/portofolio.png",
      description: "REACT | TYPESCRIPT | TAILWIND | GSAP | MAGIC UI",
    },
  ];
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".panel");
      const container = containerRef.current;

      if (!container) return;

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 3,
          snap: 1 / (sections.length - 1),
          end: () => `+=${container.offsetWidth}`,
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <div ref={containerRef} className="flex overflow-hidden w-full h-[100vh]">
      {projects.map((project) => (
        <div className="panel flex-shrink-0 w-full h-full  text-white flex items-center justify-center">
          <Project
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            siteSrc={project.siteSrc}
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;
