import RoundImage from "../../Image/Rounded/RoundImage.tsx";
import MainHeading from "../MainHeading/MainHeading.tsx";
import Introductory from "../Introductory/Introductory.tsx";
import Social from "../../Social/Social.tsx";
import { motion } from "framer-motion";

export default function MainFeed() {
    return <main className="md:flex md:flex-row-reverse md:justify-between md:ml-14 lg:ml-16" id="Home">
        <RoundImage ImgSrc={"../../../public/yehya1.jpg"}/>
        <div className="dark:bg-gray-900 dark:text-white md:mt-24 lg:mt-28 text-center">
            <MainHeading />
            <Introductory />
            <motion.div initial={{x:-100, opacity: 0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:2,delay:0.2}}>
                <Social/>
            </motion.div>
        </div>
    </main>
}