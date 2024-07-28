import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../Context/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = UseCart()
    const signoutUser = () => {
        logOut()
            .then(() => { console.log('logout user successfully') })
            .then((error) => { console.log(error) })
    }
    const navItem = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order/dessert'}>Order Food</Link></li>
        <li className="mr-3">
            <button className="btn">
            <FaCartPlus className="text-2xl"/>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </li>
        {
            user ? <>
                <li><button className="btn btn-secondary" onClick={signoutUser}>Sign Out</button></li>
            </> : <>
                <li><button className="btn btn-primary"><Link to={'/login'}>Login</Link></button></li>
            </>
        }
    </>
    return (
        <div>
            <div className="max-w-6xl mx-auto navbar fixed z-40 bg-opacity-30 bg-black  text-white px-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <a className=" text-2xl font-bold">Restrurent</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;