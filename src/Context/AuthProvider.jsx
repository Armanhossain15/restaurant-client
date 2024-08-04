import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,GoogleAuthProvider } from "firebase/auth";
import { app } from "../Firebase/firebase.config"; 
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = UseAxiosPublic()
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            if(currentUser){
                //get token and store client
                const userInfo = {email : currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                   if (res.data.token){
                        localStorage.setItem('acess_token', res.data.token)
                    }
                })
            }
            else{
                //todo: remove token (if token stored in the client)
                localStorage.removeItem('acess_token')
            }
            console.log('currentUser', currentUser);
            setLoading(false)
        });
        return ()=>{
            return unSubscribe()
        }
    },[])

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserData = (name, photo)=> {
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })  
    }

    const GoogleLogin = ()=>{
        setLoading(true)
        return signInWithPopup( auth, googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserData,
        GoogleLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;