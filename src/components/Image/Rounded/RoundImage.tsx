import { motion } from "framer-motion";

interface props {
    ImgSrc: string;
}
export default function RoundImage({ ImgSrc }: props) {
    return <motion.img
        initial={{x:100, opacity: 0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1,delay:0.2}}
        src={ImgSrc} alt="RoundImage"
        className="h-40 mb-4 md:h-1/6 lg:h-1/3 rounded-full mx-auto "/>
}