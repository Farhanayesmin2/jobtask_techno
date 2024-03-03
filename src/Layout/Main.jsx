import { Outlet } from "react-router-dom";
import Navmenu from "../Shared/NavMenu/NavMenu";
import Footer from "../Shared/Footer/Footer";



const Main = () => {
	return (
		<>
		<Navmenu></Navmenu>
			<Outlet></Outlet>
            <Footer></Footer>
			
		</>
	);
};

export default Main;