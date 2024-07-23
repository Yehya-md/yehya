import AllTechs from "./Technologies.tsx";
import BackToTop from "../BackToTop/BackToTop.tsx";
import { motion } from "framer-motion";

export default function Techs() {
    return <>
        <div id="Skills">
            <motion.h1 initial={{x:-50,opacity:0}}
                       animate={{x:0,opacity:1}}
                       transition={{duration:2,delay:0.2}}
                       className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold mt-6 md:mt10 lg:mt-12 opacity-80 text-center dark:bg-gray-900 dark:text-white">
                Techs | Skills
            </motion.h1>
            <AllTechs/>
        </div>
        <BackToTop />
    </>
}
