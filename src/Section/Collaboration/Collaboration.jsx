
import FreeSignUpSmall from "../../Component/Button/FreeSignUpSmall/FreeSignUpSmall";

const Collaboration = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto my-12">
                {/* First child div */}
                <div className="text-center">
                    {/* Header text */}
                    <h1 className="text-[#050038]  text-3xl font-bold">
                        Collaborate without<br />
                        constraints
                    </h1>
                    {/* Positional text on right corner */}
                    <p className="absolute top-0 right-0">Positional Text</p>
                </div>
                {/* Second child div */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Three grid text paragraphs */}
                    <div>
                        <p className="text-[#050038]">Free forever</p>
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	">
                            Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.
                        </span>
                    </div>
                    <div>
                        <p className="text-[#050038]">Easy integrations</p>
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	">
                            Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace.
                        </span>
                    </div>
                    <div>
                        <p className="text-[#050038]">Security first</p>
                        <span className="text-[#050038] text-opacity-60 text-sm text-justify	" >
                            We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center.
                        </span>
                    </div>
                </div>

                <div className="text-center">
                    {/* Sign up free button */}
                    <FreeSignUpSmall />
                </div>
            </div>
        </>
    );
};

export default Collaboration;
