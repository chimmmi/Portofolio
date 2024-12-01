import styles from "./BodyContent.module.css";
import ContactForm from "../Contact";
import Project from "../Project";
import Carousel from "./CarouselHorizontal"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function BodyContent() {
  const textRef = useRef<HTMLDivElement | null>(null);

 

  // Text Animation
  useEffect(() => {
    const text = textRef.current;

    if (text) {
      gsap.fromTo(
        text.querySelectorAll("span"),
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);
  return (
    <div className={`${styles.bodyContainer} text-white mt-20`}>
      {/* Animated Heading */}
      <h1
        ref={textRef}
        className="text-[4.5rem] md:text-[10rem] pt-[20rem] pb-[10rem] font-bold text-center"
      >
        {["MY", "PROJECTS"].map((word, index) => (
          <span
            key={index}
            className="block overflow-hidden "
            style={{
              display: "inline-block",
              marginRight: "3rem", 
            }}
          >
            {word}
          </span>
        ))}
      </h1>

      {/* Projects */}
      <Carousel/>
     
      {/* Divider */}
      <hr className="w-[70%] m-auto mt-20"></hr>

      {/* Contact Form */}
      <ContactForm />
      
    </div>
  );
}

export default BodyContent;
