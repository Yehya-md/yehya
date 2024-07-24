import { motion } from "framer-motion";
export default function About() {
    return <div className="lg:flex lg:justify-center md:mt-24 md:mb-24 lg:ml-24" id="About">
        <motion.img initial={{x:-10, opacity: 0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:1.5}}
                    src="../../../public/Techs/tech.jpg" alt="A tech picture" className="rounded-2xl h-48 md:h-96 mx-auto md:rounded-3xl lg:mr-10"/>
        <div className="md:ml-10">
            <motion.h1
                initial={{x:10, opacity: 0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1,delay:0.1}}
                className="text-blue-800 font-semibold text-2xl md:text-3xl text-center lg:text-start mb-1 lg:mb-3 mt-3 dark:text-sky-500">About me</motion.h1>
            <motion.h1
                initial={{x:10, opacity: 0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1.2,delay:0.2}}
                className="text-black text-2xl md:text-4xl font-semibold mb-1 md:mb-4 text-start opacity-80 dark:text-white">Front-end React Developer</motion.h1>
            <motion.p initial={{x:10, opacity: 0}}
                      whileInView={{x:0,opacity:1}}
                      transition={{duration:1.3,delay:0.4}}
                      className="text-xl md:text-2xl text-gray-500 ">My goal is to develop a beautiful,responsive and functional UI so that i can give users amazing experiences.</motion.p>
            <motion.p initial={{x:10, opacity: 0}}
                      whileInView={{x:0,opacity:1}}
                      transition={{duration:1.4,delay:0.5}}
                      className="text-xl md:text-2xl text-gray-500 mt-2 lg:text-start">My current main stack is React js and Typescript with combination with Tailwind css and Framer motion.</motion.p>
        </div>
    </div>
}