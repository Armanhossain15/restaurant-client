import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const UseAdmin = () => {
    const axiosSecure = UseAxiosSecure()
    const {user} = UseAuth()
    const {data : isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log("from useAdmin",res.data.admin);
            return res?.data?.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default UseAdmin;