import './App.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
//layout
import RootLayout from './Layouts/RootLayout'


// pages
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';


export const URL = "https://digital-life-server.onrender.com";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Products />} />
      <Route path='cart' element={<Cart />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}




export default App;
