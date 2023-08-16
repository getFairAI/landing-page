import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
export default function () {
    const scrollRef = useRef<any>(null);
    // const { scrollYProgress } = useScroll({
    //     target: scrollRef,
    //     offset: ["1 50", "1 1"],


    // })
    const controls = useAnimation();
    const handleScroll = () => {
        const scrollY = window.scrollY;
        controls.start({ y: scrollY * -0.5 }); 
    };
    useEffect(() => {
        controls.start({ y: 0 });
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <motion.div
            animate={controls}
            initial={{ y: 0, translateY: 0, opacity: 0 }}
            transition={{ duration: 0.0,  }}
            style={{
                // scale: scrollYProgress,
                // transition: scrollYProgress,
                // translateY: 50,
                perspective: "1200px"
            }}
            whileInView={{ translateY: 10, scaleX: 1.0, opacity: 1 }}
            viewport={{ root: scrollRef }}
            className="flex justify-center " >
            <img src="public\images\animate.webp" className="w-[75%] opacity-50 skew-x-12 " style={{ transform: "rotateX(20deg)" }} alt="" />
        </motion.div>

    )
}