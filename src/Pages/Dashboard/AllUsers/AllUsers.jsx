import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            // console.log("user", res.data);
            return res.data
        }
    })
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user?._id}`)
            .then(res => {
                if(res?.data?.modifiedCount > 0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.name} is Admin`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            })
    }
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure for Delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${_id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });

    }
    return (
        <>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users : {users?.length}</h2>
            </div>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>
                                    {
                                        item?.role === 'admin' ? <span>Admin</span> :
                                            <button onClick={() => handleMakeAdmin(item)}>
                                                <FaUsers className="bg-orange-500 p-2 rounded-none text-4xl  text-white"></FaUsers>
                                            </button>
                                    }
                                </td>
                                <td onClick={() => handleDelete(item?._id)}
                                    className="text-4xl  text-white cursor-pointer"><MdDelete className="bg-red-500 p-2 rounded-none"></MdDelete></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;