import ViewReport from "../../Component/Button/ViewReport/ViewReport";


const WayWork = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto mt-12">
                <div className="bg-cover bg-center h-80 flex justify-end items-center" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/5821/8178/f35490d1795865569180d6af1ca0ada1?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4Q-SLUJpipEAGHZ~AQskCEOPuRV8hMUAK7UlwEwvc~SkdUP~bQUAIn3L3XJFtPeyDXZlM-u8-OK6jl3r87lxNSYgxGUbvStsQlgz7BblC-ov8kMbMggPlsHAiapB4gwQ13xGMcCtyh1ak4bB8EGZ-Xp9fkco-eIggWO9nhpMRSHz9Xeo6J9nRrkBRFrz9MjF1J~G3yfTtLFthH3RzoSoPc96CLxtYugQ40evt-KAs4TL~nDnvDvrIl6TNNz~zXf8bxBwQx1WRCQw6fO4MA7OQflTnms~TKWm3LIbh0Ad6yMmwE-xHKLpsbP7lOl09ZwYaxWfjwHtNFHlogBJiU7Gw__)' }}>
                    <div className="max-w-md text-center bg-opacity-75 p-6 rounded-lg">
                        <h2 className="text-2xl text-[#050038] font-bold mb-2">The Ways We Work</h2>
                        <p className="lg:text-lg text-[#050038] mb-4">How has our relationship with work changed?</p>
                        <div className="flex justify-center items-center">
                            <ViewReport></ViewReport>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WayWork;