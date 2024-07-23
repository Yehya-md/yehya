import { motion } from "framer-motion";

export default function MainHeading() {
    return <>
        <motion.h1
            initial={{x:-100, opacity: 0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1,delay:0.2}}
            className="text-black ml-5 text-2xl lg:text-7xl font-semibold mb-1 md:mb-5 lg:mb-7 opacity-80 dark:text-white">Front-end React <br/> Developer</motion.h1>
    </>
}