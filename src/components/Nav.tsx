import { GoHomeFill } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Dock, DockIcon } from "../components/ui/dock";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="fixed z-50 top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
          <FaLinkedin className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" />
        </DockIcon>
        <DockIcon>
          <FaGithub className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" />
        </DockIcon>
        <DockIcon>
          <FaInstagramSquare className="size-8 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1" />
        </DockIcon>
      </Dock>
    </div>
  );
}

export default Nav;
