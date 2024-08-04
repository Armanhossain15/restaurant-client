
import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { GoogleLogin } = UseAuth()
    const asiosPublic = UseAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        GoogleLogin()
            .then(res => {
                console.log(res.user);
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }
            //send user data to database
            asiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div >
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle />
                Google Login
            </button>
        </div>
    );
};

export default SocialLogin;