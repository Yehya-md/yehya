import {motion} from "framer-motion";
import {FaReact} from "react-icons/fa";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {SiFramer} from "react-icons/si";

export default function Technologies() {
    return <div className="flex justify-center flex-wrap items-center w-full mx-auto p-5 md:p-10 ">
        <motion.div
            initial={{x:-20,y:-20,opacity:0}}
            whileInView={{y:0,x:0,opacity:1}}
            transition={{duration:2,delay:0.1}}
            className="flex">
            <img src="../../../public/Techs/html.png" alt="html" className="h-12 md:h-14 lg:h-16 rounded-xl mr-1 mb-5 cursor-pointer"/>
            <img src="../../../public/Techs/css.png" alt="css" className="h-12 md:h-14 lg:h-16 rounded-xl mr-10 mb-5 cursor-pointer"/>
        </motion.div>
        <motion.div
            initial={{x:-20,y:-20,opacity:0}}
            whileInView={{y:0,x:0,opacity:1}}
            transition={{duration:2,delay:0.2}}
            className="flex">
            <img src="../../../public/Techs/js.png" alt="javascript" className="h-12 md:h-14 lg:h-16 rounded-xl mr md:mr-1 mb-5 cursor-pointer"/>
            <img src="../../../public/Techs/typ.png" alt="typescript" className="h-12 md:h-14 lg:h-16 rounded-xl mr-3 md:mr-7 mb-5 lg:mr-10 cursor-pointer"/>
        </motion.div>
        <motion.div
            initial={{x:-20,y:-20,opacity:0}}
            whileInView={{y:0,x:0,opacity:1}}
            transition={{duration:2,delay:0.3}}
            className="flex">
            <FaReact size={80} className="text-cyan-500 cursor-pointer mr-1"/>
            <RiNextjsFill size={80} className="text-black cursor-pointer mr-10"/>
        </motion.div>
        <motion.div
            initial={{x:-20,y:-20,opacity:0}}
            whileInView={{y:0,x:0,opacity:1}}
            transition={{duration:2,delay:0.4}}
            className="flex">
            <RiTailwindCssFill size={80} className="text-sky-300 cursor-pointer mr-1"/>
            <SiFramer size={80} className="cursor-pointer mr-1"/>
        </motion.div>
    </div>
}