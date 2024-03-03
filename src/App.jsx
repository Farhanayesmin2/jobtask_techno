// import { RouterProvider } from "react-router-dom"
// import router from "./Routes/router"

// function App() {
 

//   return (
//     <div className='container mx-auto  xl:max-w-screen-2xl   '>
//     <RouterProvider router={router}></RouterProvider>
//   </div>
//   )
// }

// export default App

import { RouterProvider } from "react-router-dom"
import router from "./Routes/router"

function App() {
 

  return (
    <div  className="container mx-auto w-[100%] xl:max-w-screen-2xl"  >
    <RouterProvider router={router}></RouterProvider>
  </div>
  )
}

export default App