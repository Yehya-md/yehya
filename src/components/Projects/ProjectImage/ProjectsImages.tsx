import { motion } from "framer-motion"

interface props {
    ImgSrc: string
}
export default function ProjectsImages({ImgSrc} : props) {
    return <motion.div initial={{x:-100, opacity: 0}}
                       whileInView={{x:0,opacity:1}}
                       transition={{duration:1,delay:0.2}}
                       className="md:border-4 md:border-gray-200 dark:border-gray-500 rounded-xl md:m-3 lg:m-5">
        <img src={ImgSrc} alt="an overview image for a project" className="h-13 md:h-16 rounded-xl m-1 md:m-3"/>
    </motion.div>
}