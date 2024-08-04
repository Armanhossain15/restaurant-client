
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const PriveatRoute = ({children}) => {
    const {user, loading} = UseAuth()
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