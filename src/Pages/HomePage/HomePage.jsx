import BuiltBrain from "../../Section/BuiltBrain/BuiltBrain";
import Collaboration from "../../Section/Collaboration/Collaboration";
import ConnectTool from "../../Section/ConnectTool/ConnectTool";
import TrustedSection from "../../Section/TrustedSection/TrustedSection";
import WayWork from "../../Section/WayWork/WayWork";
import WorkTogether from "../../Section/WorkTogether/WorkTogether";
import Header from "../../Shared/Header/Header";


const HomePage = () => {
    return (
        <>
            <Header></Header>
            <TrustedSection></TrustedSection>
            <Collaboration></Collaboration>
            <WorkTogether></WorkTogether>
            <ConnectTool></ConnectTool>
            <WayWork></WayWork>
            <BuiltBrain></BuiltBrain>
        </>
    );
};

export default HomePage;