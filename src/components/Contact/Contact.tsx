import { CiLocationOn } from "react-icons/ci";
import {MdEmail} from "react-icons/md";
import Social from "../Social/Social.tsx";
import { motion } from "framer-motion";

export default function Contact() {
    return <div className="p-2 md:p-8" id="Contact">
        <motion.p className="text-center text-3xl text-blue-800 font-bold mb-5 dark:text-sky-500">Contact me</motion.p>
        <div className="md:flex justify-between">
            <div className="flex mb-3">
                <motion.div
                    initial={{x: -20, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 0.3}}>
                    <CiLocationOn size={45}/>
                </motion.div>
                <div className="ml-2">
                    <motion.h1
                        initial={{x: -50, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 0.1}}
                        className="font-bold text-blue-900 text-2xl mb-0.5 dark:text-white">Location</motion.h1>
                    <motion.p
                        initial={{x:50,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1,delay:0.2}}
                        className="text-xl md:text-2xl text-gray-500">Addis Ababa,Ethiopia</motion.p>
                </div>
            </div>
            <div className="flex mb-3">
                <motion.div
                    initial={{x:-50,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:1,delay:0.3}}>
                    <MdEmail size={45}/>
                </motion.div>
                <div className="ml-2">
                    <motion.h1
                        initial={{x:-50,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1,delay:0.1}}
                        className="font-bold text-blue-800 text-2xl mb-0.5 dark:text-white">Email Address</motion.h1>
                    <motion.p
                        initial={{x:50,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1,delay:0.2}}
                        className="text-xl md:text-2xl text-gray-500">muhammedyehya60@gmail.com</motion.p>
                </div>
            </div>
            <div className="md:flex">
                <motion.p
                    initial={{x:-50,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:1,delay:0.1}}
                    className="text-2xl text-blue-800 text-center m-1 md:m-3 lg:m-5 mr-0 md:text-gray-500 ">my social media accounts | </motion.p>
                <motion.div
                    initial={{x:30,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:1,delay:0.2}} >
                    <Social/>
                </motion.div>
            </div>
        </div>
    </div>
}