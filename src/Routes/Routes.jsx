import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PriveatRoute from "./PriveatRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";


const Routes = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/order/:category',
                element: <Order/> 
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PriveatRoute><Dashboard/></PriveatRoute>,
        children: [
            //normal user routes
            {
                path: 'cart',
                element: <Cart/>

            },
            {
                path: 'payment',
                element: <Payment/>

            },
            //admin routes
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome/></AdminRoute>
            },
            {
                path: 'additem',
                element: <AdminRoute><AddItems/></AdminRoute>
            }
        ]
    }
]);

export default Routes;