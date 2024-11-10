import { GoHomeFill } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Nav() {
  return (
    <nav className="flex fixed bg-white gap-7 p-2 z-50 -translate-x-1/2  left-1/2 bottom-4 border border-black rounded-lg shadow-2xl">
      <GoHomeFill className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" />
      <IoMdPerson className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" />
      <p className="text-2xl">|</p>
      <FaLinkedin className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1"  />
      <FaGithub className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1"  />
      <FaInstagramSquare className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1"  />
    </nav>
  );
}

export default Nav;
