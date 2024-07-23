import { motion } from "framer-motion";
import { MdNorth } from "react-icons/md";
export default function BackToTop() {
    return <motion.a
        initial={{x:10,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0.2}}
        className="text-2xl hidden text-gray-700 fixed bottom-5 end-5 font-semibold mb-7 md:flex justify-end z-30 dark:text-sky-500" href="#NavBar"><MdNorth />Back to top</motion.a>
}