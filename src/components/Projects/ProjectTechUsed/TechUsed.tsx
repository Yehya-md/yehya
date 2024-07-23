import { motion } from "framer-motion"

interface props {
    Tech:string
}
export default function TechUsed({Tech} : props) {
    return <>
        <motion.p initial={{x:100, opacity: 0}}
                  whileInView={{x:0,opacity:1}}
                  transition={{duration:1,delay:0.3}}
                  className="text-blue-700 text-lg font-semibold mt-3 dark:text-sky-500">{Tech}</motion.p>
    </>
}