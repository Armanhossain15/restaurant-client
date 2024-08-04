import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Layout = () => {
    const location = useLocation()
    // console.log(location);
    const isLogin = location.pathname.includes('login') || location.pathname.includes('signup')
    // console.log(isLogin);
    return (
        <div className='max-w-6xl mx-auto'>
            
            { isLogin || <Navbar/>}
            <Outlet ></Outlet>
           { isLogin || <Footer/>}
        </div>
    );
};

export default Layout;