import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";


const Routes = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                // loader: ()=> fetch('./menu.json')
            }
        ]
    }
]);

export default Routes;