import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";



const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item || {}
    const navigate = useNavigate()
    const location= useLocation()
    const {user} = UseAuth()
    const [,refetch] = UseCart()
    const axiosSecure = UseAxiosSecure()
    const handleAddToCart = food => {
        // console.log(cartitem );
        if(user && user?.email){
            const cartItem = {
                menuId : _id,
                email: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        title: `${name} added to your cart`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1000
                      });
                    //refetch cart to update cart
                    refetch()
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not Login",
                text: "Please Login For add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from : location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="bg-slate-900  text-white absolute right-5 top-5 px-4 py-1 rounded-sm">{price}</p>
                    <p>{recipe}</p>
                    <div onClick={()=> handleAddToCart(item)}
                     className="card-actions justify-center">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;