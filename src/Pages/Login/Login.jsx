import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const captchaRef = useRef()
    const [disabled, setDisabled] = useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const from = location?.state?.from?.pathname || '/'
    console.log(location?.state);
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log('form submit', email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log('login user', user);
            Swal.fire({
                title: "Login Successfully!",
                text: "You Login in your account!",
                icon: "success"
              });
            navigate(from)
        })
        .catch(error => {
            console.log('error login', error);
        })

    }
    const handleValidation = ()=>{
        const user_captcha_value = captchaRef.current.value
        // console.log(captcha);
        if(validateCaptcha(user_captcha_value)){
            // alert('captcha matched')
            setDisabled(false)
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered"  />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input  ref={captchaRef} type="text" placeholder="type the captcha avobe" className="input input-bordered"  />
                            <button onClick={handleValidation} className="btn btn-outline btn-xs mt-2">Validation</button>
                        </div>
                        <div className="form-control mt-6">
                            {/* disabled should be disabled for captcha */}
                            <input  className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='text-center pb-4'>
                        <p >New Here? <Link to={'/signup'} className='btn-link' >Create an Account</Link></p>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;