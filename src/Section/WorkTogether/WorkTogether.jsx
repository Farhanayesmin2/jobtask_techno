import LearnMore from '../../Component/Button/LearnMore/LearnMore';
import workImg from '../../../public/hybridwork.png.svg';

const WorkTogether = () => {
    return (
        <div className="max-w-5xl mx-auto mt-12">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center ">
                {/* Text div left side */}
                <div>
                    <h1 className="text-[#050038] my-6 text-2xl lg:text-start text-center lg:text-5xl font-bold"> Work together, <br className='lg:hidden'></br>wherever you work.</h1>
                    <div className=' lg:text-start text-center'>


                        <span className="text-opacity-60 text-md text-[#050038]  lg:text-lg mb-4">
                            In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
                        </span>
                    </div>
                    <div className="   my-6">
                        <LearnMore />
                    </div>
                </div>

                {/* Image div right side */}
                <div>
                    <img src={workImg} alt="Team collaboration" className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default WorkTogether;
