import { motion } from "framer-motion"

interface props {
    Title: string
}
export default function ProjectsImages({Title} : props) {
    return <motion.p initial={{x:100, opacity: 0}}
                     whileInView={{x:0,opacity:1}}
                     transition={{duration:1,delay:0.1}}
                     className="font-semibold text-xl md:text-2xl">{Title}</motion.p>
}