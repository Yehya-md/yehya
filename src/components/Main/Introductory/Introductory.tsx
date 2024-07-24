import { motion } from "framer-motion";

export default function Introductory() {
    return <>
        <motion.p initial={{x:-100, opacity: 0}}
                  whileInView={{x:0,opacity:1}}
                  transition={{duration:1,delay:0.5}}
                  className="md:mb-2 md:text-start md:mt-1 text-lg ml-5 md:text-2xl text-gray-500">Hey,I'm Yehya Muhammed.A Front-end React Developer in <br/> Addis Ababa,Ethiopia.</motion.p>
    </>
}