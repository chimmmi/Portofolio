import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

function SkillsIcons() {
    return (
        <ul className="flex justify-center mt-20 mb-6 gap-16 flex-wrap">
            <li><FaReact className="size-14"/></li>
            <li><RiNextjsFill className="size-14"/></li>
            <li><RiTailwindCssFill className="size-14"/></li>
            <li><FaNode className="size-14"/></li>
            <li><SiTypescript className="size-[3rem] h-[3.5rem]"/></li>
            <li><FaHtml5 className="size-14"/></li>
            <li><IoLogoCss3 className="size-14"/></li>
            <li><FaJsSquare className="size-14"/></li>
            <li><FaSass className="size-14"/></li>
        </ul>
    )
}

export default SkillsIcons
