import connectToolImg from '../../../public/M3_integrations_all_integrations.png.svg';
import LearnMore from '../../Component/Button/LearnMore/LearnMore';

const ConnectTool = () => {
    return (
        <div className="max-w-5xl mx-auto mt-12">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
                {/* Image div left side */}
                <div>
                    <img src={connectToolImg} alt="Connect Tool" className="max-w-full h-auto" />
                </div>
                {/* Text div right side */}
                <div>
                    <h1 className="text-[#050038] my-6 text-2xl lg:text-start text-center lg:text-5xl font-bold">Connect Tool</h1>
                    <div className=' lg:text-start text-center'>
                        <span className="text-opacity-60 text-md text-[#050038]  lg:text-lg mb-4">
                            Description of the Connect Tool.
                        </span>
                    </div>
                    <div className="my-6">
                        <LearnMore />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectTool;
