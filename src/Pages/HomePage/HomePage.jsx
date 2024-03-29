import BuiltBrain from "../../Section/BuiltBrain/BuiltBrain";
import Collaboration from "../../Section/Collaboration/Collaboration";
import ConnectTool from "../../Section/ConnectTool/ConnectTool";
import KindTeam from "../../Section/KindTeam/KindTeam";
import LoveWorld from "../../Section/LoveWorld/LoveWorld";
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
            <KindTeam></KindTeam>
            <LoveWorld></LoveWorld>
        </>
    );
};

export default HomePage;