import Star from "../svg/Star";
import Xmark from "../svg/Xmark";
import { motion } from "framer-motion";
export default function () {
    return (

        <div className="w-[80%] relative mx-auto flex justify-center mt-28">
            <Animation style={"left-0"} />
            <Animation style={"right-0"} />
            <motion.div

            >

                <Aiexper />
            </motion.div>
        </div>


    )
}


function Animation(props: any) {
    const { style } = props;

    return (
        <>
            <style>
                {
                    '.movingfun{animation: movingfun ease-in-out 20s infinite; transform: scale(0.5,1);} @keyframes movingfun {0% {transform: translate(0, 100);} 50% {transform: translate(0, 290px);} 120% {transform: translate(0, 0); transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); } }'
                }
            </style>
            <div className={`absolute  ${style} w-64 h-64 overflow-hidden`}>
                <div className="movingfun  relative  w-full">
                    <div className="w-5 absolute left-0">
                        <Xmark />
                    </div>
                    <div className="absolute w-5 right-0">
                        <Xmark />
                    </div>
                    <div className="w-5 top-24 absolute">
                        <Xmark />
                    </div>
                </div>
            </div>
        </>

    )
}
function Aiexper() {
    return (
        <div className="flex justify-center items-center flex-col ">
            <motion.div
                initial={{ opacity: 0, scale: 0, translateY: -5 }}
                animate={{ y: [0, 120, 0], opacity: 0.8, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 1,
                }}

            >
                <div className="duration-1000 text-black ">
                    <Star />
                </div>
            </motion.div >

            <motion.div initial={{ scale: 0 }}
                animate={{ scale: 1, }}
                transition={{
                    duration: 0.30,
                }}
            >
                <h1 className="text-5xl  px-96 text-center font-light">Start to Decentralise
                    Your AI Experience</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{
                    duration: 0.3,
                    delay: 3.5,
                }}

            >
                <button className=" text-gray-600 mt-16 border border-black bg-white hover:shadow-md   rounded-lg px-28 py-3 duration-500 hover:-translate-y-1 hover:bg-[#e8e8e8]">Try Now</button>

            </motion.div>

        </div>
    )
}
