// import HeaderLogo from "../svg/HeaderLogo";

import { useState } from "react";
import ToggleOpen from "../svg/ToggleOpen";
import Xmark from "../svg/Xmark";
import { motion } from "framer-motion";
import HeaderLogo from "../svg/HeaderLogo";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0, x: 250, }}
            animate={{ scale: 1, opacity: 1, x: 0, }}
            transition={{
                duration: 2.5,
                delay: 2,
                ease: [0, 0.71, 0.2, 1.01]
                
            }}
        >

            <div className="flex justify-between h-full  items-center lg:px-10 pr-3 ">
                <LogoFun />
                <div>
                    {
                        isOpen ?
                            <button onClick={() => { setIsOpen(false) }} className="w-7 h-fit lg:hidden block">
                                <ToggleOpen />
                            </button > :
                            <button onClick={() => { setIsOpen(true) }} className="w-7 h-fit lg:hidden block">
                                <Xmark />
                            </button >
                    }
                </div>
                <HeaderLeftBtn isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </motion.div>
    )
}

const LogoFun = () => {
    return (
        <div className=" lg:px-14 px-4  lg:py-6 py-4">
                <HeaderLogo />
        
        </div>
    )
}
const HeaderLeftBtn = ({ isOpen, setIsOpen }: any) => {
    return (
        <div className={`flex lg:flex-row flex-col gap-3 lg:pt-0 pt-12 items-center lg:bg-transparent bg-white  lg:relative lg:px-0 px-3 ${isOpen ? "lg:flex hidden " : "lg:z-0 z-20 lg:bg-opacity-0 bg-opacity-80 lg:relative absolute lg:top-0 top-16  h-full lg:w-fit w-full"}`}>
            <button className=" px-5 font-medium pb-[3px] text-gray-500">Docs</button>
            <button className="border border-black rounded-lg px-5   bg-gray-50  font-medium  w-full lg:py-0 py-3 text-gray-500 hover:scale-105  duration-500">Open App</button>
        </div>
    )
}

