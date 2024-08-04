import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = UseAxiosPublic()
    const { createUser, updateUserData } = useContext(AuthContext)
    const navigate = useNavigate()
    // const handleLogin = e => {
    //     // e.preventDefault()
    //     // const name = e.target.name.value
    //     // const email = e.target.email.value
    //     // const password = e.target.password.value
    //     // // console.log('form submit',name, email, password);
    //     createUser(email, password)
    //     .then(result => {
    //         console.log(result.user);
    //     })

    // }

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                // const user = result.user
                console.log(result.user);
                // create user data send to database
                updateUserData(data.name, data.PhotoURL)
                    .then(() => {
                        console.log('profile updated');
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        // console.log(userInfo);
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data);
                                if(res.data.insertedId){
                                    Swal.fire({
                                        title: "Successfull",
                                        text: "Account Create Successfully",
                                        icon: "success"
                                    });
                                }
                                navigate('/')
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log('error from createUser', error);
            })
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name="PhotoURL" type="text" {...register("PhotoURL", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                            {errors.PhotoURL && <span className="text-red-500">PhotoURL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" {...register("password", { required: true, maxLength: 8 })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className="text-red-500">max 8 words</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Signup" />
                        </div>
                    </form>
                    <div className='text-center pb-4'>
                        <p >Have An Account? <Link to={'/login'} className='btn-link' >Login</Link></p>
                    </div>
                    <div className=" py-5 text-center">
                    <SocialLogin/>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SignUp;