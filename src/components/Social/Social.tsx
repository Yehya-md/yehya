import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";
import {PiXLogoBold} from "react-icons/pi";
import {FaTelegramPlane} from "react-icons/fa";

export default function Social() {
    return <>
        <div className="flex justify-center mt-2 md:ml-5 md:justify-around text-center lg:mt-5 md:float-left">
            <a href="https://github.com/Yehya-md" target={"_blank"}><IoLogoGithub size={30} className="mr-2 md:mr-4 cursor-pointer"/></a>
            <a href="https://www.linkedin.com/in/yehya-muhammed" target={"_blank"}><IoLogoLinkedin size={30} className="mr-2 md:mr-4 cursor-pointer"/></a>
            <a href="https://x.com/y3hya10" target={"_blank"}><PiXLogoBold size={30} className="mr-2 md:mr-4 cursor-pointer"/></a>
            <a href="https://telegram.org/y3hya10" target={"_blank"}><FaTelegramPlane size={30} className="mr-2 md:mr-4 cursor-pointer"/></a>
        </div>
    </>
}