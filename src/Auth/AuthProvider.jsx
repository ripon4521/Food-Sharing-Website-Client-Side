
import { createContext, useEffect, useState} from "react";

import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const auth = getAuth(app)


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const[user , setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [loading , setLoading]=useState(true);

    const googleLogin = ()=>{
        setLoading(true)

        return signInWithPopup(auth ,provider)
    }

    const logOut = ()=>{
        setLoading(true)
       
        return signOut(auth)
    }

    const sighnUp = (email,passward)=>{
        setLoading(true)
       
        return createUserWithEmailAndPassword(auth,email,passward)
    }

    const login =(email,passward)=>{
    
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,passward)
    }



    useEffect(()=>{
        const UnSubscribe= onAuthStateChanged(auth, CurrentUser =>{
            // console.log(CurrentUser);
        
            setUser(CurrentUser)
            setLoading(false)
      
        })
        return ()=>{
            UnSubscribe();
        }
    });

    const authInfo={
        user,
        googleLogin,
        logOut,
        sighnUp,
        login,
        loading
    }
    return (
    
             <AuthContext.Provider value={authInfo}> 
         {children}
     </AuthContext.Provider>
  
    );
};

export default AuthProvider;