import {
    motion, useScroll
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

let tabs = [
    { id: "2dmages", label: "2D Images" },
    { id: "detector", label: "AI Detector" },
    { id: "images", label: "3D Images" },
    { id: "Audio ", label: "Audio (Text-To-Speech)" },
];
export default function VideoCard() {
    let [activeTab, setActiveTab] = useState(tabs[0].id);
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const handleClick = () => {
        const myref = ref.current as any
        myref.scrollIntoView({ behavior: 'smooth' })
    };
    const handleClick2 = () => {
        const myref2 = ref2.current as any
        myref2.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClick3 = () => {
        const myref3 = ref3.current as any
        myref3.scrollIntoView({ behavior: 'smooth', });
    }
    const handleClick4 = () => {
        const myref4 = ref4.current as any
        myref4.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        videoEvent()
    }, [])
    const videoEvent = () => {
        const v: any = document.getElementById('video1');
        v.addEventListener('mouseover', () => {
            v.play();
        });
        v.addEventListener('mouseout', () => {
            v.pause()
        });
        const v2: any = document.getElementById('video2');
        v2.addEventListener('mouseover', () => {
            v2.play();
        });
        v2.addEventListener('mouseout', () => {
            v2.pause()
        });
        const v3: any = document.getElementById('video3');
        v3.addEventListener('mouseover', () => {
            v3.play();
        });
        v3.addEventListener('mouseout', () => {
            v3.pause()
        });

        const v4: any = document.getElementById('video4');
        v4.addEventListener('mouseover', () => {
            v4.play();
        });
        v4.addEventListener('mouseout', () => {
            v4.pause()
        });
    }
    const scrollRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["1 50", "1 1"],

    })
    return (
        <div className="w-[80%] min-h-[100vh] mx-auto">
            <motion.div
                ref={scrollRef}
                className="relative  "
                style={{
                    scale: scrollYProgress,
                    transition: scrollYProgress,
                    translateY: 50,

                }}
                animate={{
                    scale: 0.10,
                    transition: scrollYProgress,

                }}
            >
                <div className=" sticky -top-6 mb-12 " >
                    {/* <div className="flex justify-center ">
                    <button onClick={handleClick} className="focus:border  peer-autofill:  px-12 py-2  rounded-lg  focus:border-black" >  2D Images</button>
                    <button onClick={handleClick2} className="focus:border px-12 py-2  rounded-lg focus:border-black " > AI Detector</button>
                    <button onClick={handleClick3} className="focus:border px-12 py-2  rounded-lg focus:border-black" > 3D Images</button>
                    <button onClick={handleClick4} className="focus:border px-12 py-2  rounded-lg focus:border-black" >Audio (Text-To-Speech)</button>
                </div> */}
                    <div className="flex justify-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() =>setActiveTab(tab.id)}
                                className={`${activeTab === tab.id ? "" : ""
                                    } relative rounded-full text-sm font-medium text-black px-16 py-3   transition focus-visible:outline-2`}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                {activeTab === tab.id && (
                                    <motion.span
                                        // layoutId="outline"
                                        className="absolute inset-0 z-10 border border-black "
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", duration: 0.6 }}
                                    />
                                )}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div ref={ref} className="justify-center flex  gap-5  sticky  top-10 w-[75%] mx-auto ">
                    <video id="video1" className="mx-auto hover:-translate-x-7  rounded-xl border border-black  hover:-translate-y-7 ease-out  duration-300 hover:ease-in-out">
                        <source src="public/videos/lionking.mp4" type="video/mp4" />
                    </video>
                </div>

                <div ref={ref2} className="sticky top-20 hover:-translate-x-7 hover:-translate-y-7 w-[75%] mx-auto  ease-out z-10  duration-300 hover:ease-in-out">
                    <video id="video2" className="mx-auto rounded-xl border border-black">
                        <source src="public/videos/lionking.mp4" type="video/mp4" />
                    </video>
                </div>
                <div ref={ref3} className="sticky top-28 z-20 hover:-translate-x-7 w-[75%] mx-auto     hover:-translate-y-7 ease-out  duration-300 hover:ease-in-out">
                    <video id="video3" className="mx-auto  rounded-xl border border-black">
                        <source src="public/videos/lionking.mp4" type="video/mp4" />
                    </video>
                </div>
                <div ref={ref4} className="sticky top-32 z-30 hover:-translate-x-7  w-[75%] mx-auto   hover:-translate-y-7 ease-out  duration-300 hover:ease-in-out">
                    <video id="video4" className="mx-auto  rounded-xl border border-black">
                        <source src="public\videos\lionking.mp4" type="video/mp4" />
                    </video>
                </div>
            </motion.div>
        </div>
    )
}