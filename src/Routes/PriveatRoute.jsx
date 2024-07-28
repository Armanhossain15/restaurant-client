import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveatRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(user){
        return children
    }
    else if(loading){
       return <span className="loading loading-dots loading-lg"></span>
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>;
};

export default PriveatRoute;