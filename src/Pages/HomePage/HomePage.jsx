import Collaboration from "../../Section/Collaboration/Collaboration";
import TrustedSection from "../../Section/TrustedSection/TrustedSection";
import WorkTogether from "../../Section/WorkTogether/WorkTogether";
import Header from "../../Shared/Header/Header";


const HomePage = () => {
    return (
        <>
            <Header></Header>
            <TrustedSection></TrustedSection>
            <Collaboration></Collaboration>
            <WorkTogether></WorkTogether>
        </>
    );
};

export default HomePage;