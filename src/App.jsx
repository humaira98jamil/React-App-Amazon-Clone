import { Checkout, HomePage } from "./pages/index";
import { Navbar,Footer } from "./components/index";
import { productsData } from "./API/api";
import {createBrowserRouter, createRoutesFromElements, Outlet, Route,RouterProvider,

 } from "react-router-dom";


const Layout = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} loader={productsData} />
        <Route path="/Checkout" element={<Checkout />} />
      </Route>
    )
  );


  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
