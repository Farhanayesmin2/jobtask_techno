import React from 'react';
import LearnMore from '../../Component/Button/LearnMore/LearnMore';
import connectToolImg from '../../../public/M3_integrations_all_integrations.png.svg';

const ConnectTool = () => {
    return (
        <div className="max-w-5xl mx-auto mt-12">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-36 items-center">
                {/* Image div left side */}
                <div className="mb-6 lg:mb-0">
                    <img src={connectToolImg} alt="Connect Tool" className="max-w-full h-auto" />
                </div>
                {/* Text div right side */}
                <div>
                    <h1 className="text-[#050038] my-6 text-2xl lg:text-start text-center lg:text-5xl font-bold">Connect <br />
                        your tools,<br />
                        close your tabs</h1>
                    <div className='lg:text-start text-center mb-4'>
                        <span className="text-opacity-60 text-md text-[#050038] lg:text-lg">
                            Whether you want to edit your Google Docs, resolve <br /> Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.
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
