import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../../Layout/DashbordLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllUser from "../../Pages/AllUser/AllUser";
import Blog from "../../Pages/Blog/Blog";
import Booking from "../../Pages/Booking/Booking";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyProduct from "../../Pages/MyProduct/MyProduct";
import Samsung from "../../Pages/Samsung/Samsung";
import SignUp from "../../Pages/Signup/SignUp";
import Oppo from "../../Pages/Oppo/Oppo";
import Vivo from "../../Pages/Vivo/Vivo";


import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Payment from "../../Pages/Payment/Payment";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element:<Blog></Blog> 
            },
            {
                path: '/category/samsung',
                element: <PrivateRoute><Samsung></Samsung></PrivateRoute>

            },
            {
                path: '/category/oppo',
                element: <PrivateRoute><Oppo></Oppo></PrivateRoute>

            },
            {
                path: '/category/vivo',
                element: <PrivateRoute><Vivo></Vivo></PrivateRoute>

            },
            
            
           

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashbordLayout></DashbordLayout></PrivateRoute>,
        children: [
            {

                path: '/dashboard',
                element: <Dashbord></Dashbord>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>

            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>

            },
            {
                path: '/dashboard/booking',
                element: <Booking></Booking>

            },
            {
                path: '/dashboard/users',
                element:<AllUser></AllUser>

            },
            {
                path: '/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader: ({params}) => fetch(`https://finnal-project-server.vercel.app/booking/${params.id}`)

            },
        ]
    }
])

export default router;