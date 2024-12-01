import styles from "./Header.module.css";

function Header() {
  return (
    <div
      className={`${styles.headerContainer} shadow-2xl`}
    >
      <div className="flex flex-col justify-center items-center text-white">
        <img
          src="/profile.jpg"
          className="rounded-full w-[15rem] h-[15.5rem] md:w-[25rem] md:h-[25.5rem] p-10 mt-14 z-10"
        />
        <h1 className="font-bold text-[5rem] md:text-[8rem] -mt-16 z-10">
          CHIME <span className="font-extralight text-[3rem] md:text-[4rem]">TSEGON</span>
        </h1>
        <div className="w-[15.7rem] border-[4px] border-white mb-10">
          <h2 className="font-extralight text-3xl p-5">Web Developer</h2>
        </div>
        <p className="font-extralight mb-10 text-wrap">
          “The only way to do great work is to love what you do.” - Steve Jobs
        </p>
      </div>
      <img src="/moonlight.svg" className="absolute w-[24rem] top-[7%] right-[27%] opacity-40 z-0"></img>
    </div>
  );
}

export default Header;
