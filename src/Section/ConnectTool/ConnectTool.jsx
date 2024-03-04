import connectToolImg from '../../../public/M3_integrations_all_integrations.png.svg';
import LearnMore from '../../Component/Button/LearnMore/LearnMore';

const ConnectTool = () => {
    return (
        <div className="max-w-5xl mx-auto mt-12">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-36 items-center">
                {/* Image div left side */}
                <div>
                    <img src={connectToolImg} alt="Connect Tool" className="max-w-full h-auto" />
                </div>
                {/* Text div right side */}
                <div>
                    <h1 className="text-[#050038]  my-6 text-2xl lg:text-start text-center lg:text-5xl font-bold">Connect <br></br>
                        your tools,<br></br>
                        close your tabs</h1>
                    <div className=' lg:px-0 px-12 lg:text-start text-center'>
                        <span className="text-opacity-60 text-md text-[#050038]  lg:text-lg mb-4">
                        Whether you want to edit your Google Docs, resolve <br></br> Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.
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
