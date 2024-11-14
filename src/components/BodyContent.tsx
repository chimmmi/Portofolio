import styles from "./BodyContent.module.css";
import ContactForm from "./Contact";
import Project from "./Project";

function BodyContent() {
  return (
    <div className={`${styles.bodyContainer} text-white mt-20`}>
      <h1 className="text-2xl ml-32 pt-32 underline">Works...</h1>
      {/* <img src='/public/moon.svg' className="absolute opacity-50 z-0 right-10 w-80"></img> */}
      <div className="flex justify-center mt-[4rem] relative">
        <Project
          title={"- BOOM RADIO"}
          siteSrc={"https://boom-radio.vercel.app/"}
          imgSrc={"/public/boom-radio-picture.jpg"}
          r="2"
        />
      </div>
      <hr className="w-[40rem] m-auto mt-20"></hr>
      <h1 className="text-2xl ml-32 underline mt-20">Personal Works...</h1>
      <div className="grid justify-center items-center grid-cols-2 m-auto mt-20 relative p-10 gap-20">
        <Project
          title={"- BOOM RADIO"}
          siteSrc={"https://boom-radio.vercel.app/"}
          imgSrc={"/public/boom-radio-picture.jpg"}
          r="2"
        />
        <Project
          title={"- BOOM RADIO"}
          siteSrc={"https://boom-radio.vercel.app/"}
          imgSrc={"/public/boom-radio-picture.jpg"}
          r="2"
        />
        <Project
          title={"- BOOM RADIO"}
          siteSrc={"https://boom-radio.vercel.app/"}
          imgSrc={"/public/boom-radio-picture.jpg"}
          r="2"
        />
        <Project
          title={"- BOOM RADIO"}
          siteSrc={"https://boom-radio.vercel.app/"}
          imgSrc={"/public/boom-radio-picture.jpg"}
          r="2"
        />
      </div>
      <hr className="w-[40rem] m-auto mt-20"></hr>
      <ContactForm />
    </div>
  );
}

export default BodyContent;
