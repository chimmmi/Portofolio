import { GoHomeFill } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Dock, DockIcon } from "../components/ui/dock";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="fixed z-50 left-[22%] -top-7 md:top-3 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2">
      <Dock direction="middle">
        <DockIcon>
          <Link to={'/'}>
          <GoHomeFill className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link to={'/about'}>
          <IoMdPerson className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" />
          </Link>
        </DockIcon>
        <p>|</p>
        <DockIcon>
          <a href="https://www.linkedin.com/in/chime-tsegon-69289723b" target="_blank">

          <FaLinkedin className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" />
          </a>
        </DockIcon>
       
        <DockIcon>
        <a href="https://github.com/chimmmi" target="_blank">
          <FaGithub className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" />
        </a>
        </DockIcon>
        <DockIcon>
        <a href="https://www.instagram.com/chime.tsegon/" target="_blank">
          <FaInstagramSquare className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" />
        
        </a>
        </DockIcon>
      </Dock>
    </div>
  );
}

export default Nav;
