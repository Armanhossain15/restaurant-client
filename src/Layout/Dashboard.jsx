import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../Hooks/UseCart";
import { MdEmail } from "react-icons/md";
import UseAdmin from "../Hooks/UseAdmin";



const Dashboard = () => {
    const [cart] = UseCart()

    //todo : get isadmin value from the database
    const [isAdmin] = UseAdmin()
    // const isAdmin = true
    // console.log("isAdmin", isAdmin);


    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminhome">
                                    <FaHome />
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/additem">
                                    <FaUtensils />
                                    Add Item</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageitem">
                                    <FaList />
                                    Manage Item</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/managebookings">
                                    <FaBook />
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers">
                                    <FaUsers />
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userhome">
                                        <FaHome />
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar />
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart />
                                        My cart ({cart?.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd />
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList />
                                        My Bookings</NavLink>
                                </li>
                            </>
                    }
                    {/* sheared navlinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <FaSearch />
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <MdEmail />
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;