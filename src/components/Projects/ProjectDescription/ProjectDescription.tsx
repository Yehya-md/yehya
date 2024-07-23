import { motion } from "framer-motion";

interface props {
    description: string;
}
export default function ProjectDescription({description} : props) {
    return <motion.p initial={{x:100, opacity: 0}}
                     whileInView={{x:0,opacity:1}}
                     transition={{duration:1,delay:0.2}}
                     className="mt-1 text-xl md:text-2xl text-gray-500">{description}</motion.p>
}