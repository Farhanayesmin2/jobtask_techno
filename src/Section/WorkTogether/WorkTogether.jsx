import workImg from "../../../public/hybridwork.png.svg"

const WorkTogether = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
                    {/* Text div left side */}
                    <div>
                        <p className="text-lg md:text-xl mb-4">
                            Work together, wherever you work. In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                        </p>
                        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Learn more →</a>
                    </div>

                    {/* Image div right side */}
                    <div>
                        <img src={workImg} alt="Team collaboration" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkTogether;
