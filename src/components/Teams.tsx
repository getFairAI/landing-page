export default function Teams() {
    return (
        <section className="bg-gradient-to-b from-[#e5e6eb] to-[#f4f4f6]  min-h-[100vh]">
            <div className="pt-32 flex flex-col justify-center items-center gap-4">
                <h3 className="text-4xl font-thin text-black">Meet The Team</h3>
                <p className="text-gray-500 px-96 text-center">As three friends scattered throughout Europe, we were looking for a way to discover books and share our own recommendations. Nothing cut the mustard, so we took the challenge on. </p>
                <div className="flex items-center gap-8 mt-6">
                    <img className="w-80 rounded-xl" src="public/images/teams.jpg" alt="" />
                    <img className="w-80 rounded-xl translate-y-16" src="public/images/teams.jpg" alt="" />
                    <img className="w-80 rounded-xl" src="public/images/teams.jpg" alt="" />

                </div>
            </div>
        </section>
    )
}