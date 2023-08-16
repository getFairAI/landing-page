import { useRef } from "react";
import 'swiper/css/pagination';
import "swiper/css";
import { SwiperRef, Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import ArrorR from "../svg/ArrowR";
import { ArrowLeft } from "../svg/Index";
import { motion } from "framer-motion";
export default function Crasual() {

    const Carddata = [{
        title: "Cencorship-Free AI",
        description: "Break From Limitations",
        src: "public/images/cracul.png",
        fStyle: "flex flex-col-reverse gap-2",
        fStyle2: "px-16 "

    },
    {
        title: "Cencorship-Free AI bot  ",
        description: "Break From Limitations",
        fStyle: "flex flex-col-reverse gap-2 ",
        fStyle2: "px-[50px] py-12",
        fStyle3: "",
        discripstion2: "Lorem  elit. Enim quidem et totam exercitationem, expedita officia eligendi eveniet explicabo voluptate illo nobis cupiditate sequi quos veritatis odit neque dolorum deserunt consequatur. ipsum dolor, sit amet consectetur adipisicing elit. Id neque, exercitationem, dicta corrupti adipisci et, harum",

    },
    {
        title: "Cencorship-Free AI bot  ",
        description: "Break From Limitations",
        fStyle: "flex ",
        fStyle2: "px-[50px] py-12",
        fStyle3: "",
        discripstion2: "Lorem  elit. Enim quidem et totam exercitationem, expedita officia eligendi eveniet explicabo voluptate illo nobis cupiditate sequi quos veritatis odit neque dolorum deserunt consequatur. ipsum dolor, sit amet consectetur adipisicing elit. Id neque, exercitationem, dicta corrupti adipisci et, harum",

    },
    {
        title: "Cencorship-Free AI bot  ",
        description: "Break From Limitations",
        fStyle: "flex flex-col-reverse gap-2 ",
        fStyle2: "px-[50px] py-12",
        fStyle3: "",
        discripstion2: "Lorem  elit. Enim quidem et totam exercitationem, expedita officia eligendi eveniet explicabo voluptate illo nobis cupiditate sequi quos veritatis odit neque dolorum deserunt consequatur. ipsum dolor, sit amet consectetur adipisicing elit. Id neque, exercitationem, dicta corrupti adipisci et, harum",

    },]

    const handleNext = () => {
        swiperRef.current?.swiper.slideNext();
    };

    const handlePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };
    const swiperRef = useRef<SwiperRef>(null);
    return (
        <section className="bg-[#e5e6eb]">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                style={{ direction: "rtl" }}
                dir="rtl"
                ref={swiperRef}
                pagination={{
                    clickable: true,
                }}
                modules={[]}
                className="mySwiper p-6 relative  "
            >
                {
                    Carddata.map((items, index) => {
                        return (
                            <SwiperSlide key={index} className="p-4 ">
                                <Card description={items.description} title={items.title} src={items.src} fStyle={items.fStyle} fStyle2={items.fStyle2} discripstion2={items.discripstion2} fStyle3={items.fStyle3} />
                            </SwiperSlide>
                        )
                    })
                }
                <div className="flex w-full justify-between px-12 h-full  items-center top-0 z-10 absolute">
                    <motion.div whileTap={{ scale: 0.9 }}
                    >
                        <button className="rounded-full h-fit w-10 bg-opacity-75 text-white  duration-500  bg-gray-400 p-1" onClick={handlePrev}>
                            <ArrorR />
                        </button>
                    </motion.div>
                    <motion.div whileTap={{scale:0.9}}>
                    <button className="rounded-full w-10 h-fit bg-opacity-75 text-white bg-gray-400 p-1" onClick={handleNext}>
                        <ArrowLeft />
                    </button>
                    </motion.div>
                   
                </div>
            </Swiper>

            <div className="flex justify-center pb-5">
                <button className=" text-gray-600 mt-16 border  hover:shadow-md  border-black  rounded-lg px-28 py-3 duration-500 hover:-translate-y-1 hover:bg-[#dcdbdb]">Start Using</button>

            </div>

        </section>


    );
}
