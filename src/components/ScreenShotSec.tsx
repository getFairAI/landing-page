
export default function ScreenShotSec() {
    return (
        <>
            <style>
                {
                    `.Animate{ animation: rotate 0.80s infinite;transition: transform 0.6s; cubic-bezier(0.8, 0.14, 0.42, 0.72)  } @keyframes rotate { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg);  transform-style: preserve-3d;    } } `
                }
            </style>
            <section className="bg-gradient-to-b to-[#e5e6eb] from-[#f4f4f6] ">
                <div className="min-h-[100vh]  flex lg:flex-row flex-col gap-5  lg:pt-24 pt-0 items-center">


                    <div className="flex flex-col gap-7 lg:px-24 px-4 lg:w-[75%] w-full">
                        <div className="relative w-fit top-12 lg:my-7 my-5 -translate-x-6">
                            <div className="Animate">
                                <img src="public\images\red.png" className="w-24 h-fit  " alt="" />
                            </div>
                        </div>

                        <h5 className=" text-[#000000b0] text-xl">Providing a platform for a passionate Open Source community of creators </h5>
                        <p className="text-gray-500 ">53% of our members have imported their historical data from Goodreads. It's time for a change. Don't loathe your reading list –– liberate it.</p>
                    </div>
                    <div className="lg:w-fit w-full ">
                        <div className=" rounded-lg border-r-2 h-60 flex items-center justify-end lg:-translate-x-72 lg:px-0 px-4 lg:mb-7 mb-0" >
                            <img src="public\images\screenshot.webp" alt="" />

                        </div>
                        <div className="rounded-lg border-l-2 lg:h-64   justify-start   flex items-center  ">
                            <img src="public\images\screen2.webp" alt="" className="w-[75%] lg:px-0 px-4 " />
                        </div>
                    </div>
                </div>
                    <button className="border lg:mt-0 mt-6 rounded-md border-black px-10 py-4 lg:ml-24 ml-4 bg-transparent text-gray-800 text-xl block ">Why Fair Protocol</button>

            </section>
        </>



    )
}


