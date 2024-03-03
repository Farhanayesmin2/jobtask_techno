import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Pages/NotFound/NotFound";
import HomePage from "../Pages/HomePage/HomePage";



const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				path: "/",
				element: <HomePage></HomePage>,
			},
		
			
		],
	},
	
	
	
]);
export default router;