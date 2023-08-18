
export default function ScreenShotSec() {
    return (
        <>
            <style>
                {
                    `.Animate{ animation: rotate 0.80s infinite;transition: transform 0.6s; cubic-bezier(0.8, 0.14, 0.42, 0.72)  } @keyframes rotate { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg);  transform-style: preserve-3d;    } } `
                }
            </style>
            <section className="bg-gradient-to-b to-[#e5e6eb] from-[#f4f4f6] ">
                <div className="min-h-[100vh]  flex gap-5 items-center">


                    <div className="flex flex-col gap-7 px-24 w-[75%]">
                        <div className="relative w-fit">
                            <div className="Animate">
                            <img src="public\images\red.png"  className=" " alt="" />
                            </div>
                        </div>

                        <h5 className=" text-[#000000b0] text-xl">Providing a platform for a passionate Open Source community of creators </h5>
                        <p className="text-gray-500 ">53% of our members have imported their historical data from Goodreads. It's time for a change. Don't loathe your reading list –– liberate it.</p>
                    </div>
                    <div >
                        <div className=" rounded-lg border-r-2 h-60 flex items-center justify-end -translate-x-72 mb-7" >
                            <img src="public\images\screenshot.webp" alt="" />

                        </div>
                        <div className="rounded-lg border-l-2 h-64   justify-start   flex items-center  ">
                            <img src="public\images\screen2.webp" alt="" className="w-[75%] " />
                        </div>
                    </div>
                </div>
                <button className="border rounded-md border-black px-10 py-4 ml-24 bg-transparent text-gray-800 text-xl block ">Why Fair Protocol</button>
            </section>
        </>



    )
}


