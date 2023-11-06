
import { createContext} from "react";
// import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import auth from "./firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    // const[user , setUser] = useState(null);
    // const provider = new GoogleAuthProvider();
    // const [loading , setLoading]=useState(true);

    // const googleLogin = ()=>{
    //     setLoading(true)

    //     return signInWithPopup(auth ,provider)
    // }

    // const logOut = ()=>{
    //     setLoading(true)
       
    //     return signOut(auth)
    // }

    // const sighnUp = (email,passward)=>{
    //     setLoading(true)
       
    //     return createUserWithEmailAndPassword(auth,email,passward)
    // }

    // const login =(email,passward)=>{
    
    //     setLoading(true)
    //     return signInWithEmailAndPassword(auth,email,passward)
    // }



    // useEffect(()=>{
    //     const UnSubscribe= onAuthStateChanged(auth, CurrentUser =>{
    //         // console.log(CurrentUser);
        
    //         setUser(CurrentUser)
    //         setLoading(false)
      
    //     })
    //     return ()=>{
    //         UnSubscribe();
    //     }
    // });

    // const authInfo={
    //     user,
    //     googleLogin,
    //     logOut,
    //     sighnUp,
    //     login,
    //     loading
    // }
    return (
    
             <AuthContext.Provider > 
         {children}
     </AuthContext.Provider>
  
    );
};

export default AuthProvider;