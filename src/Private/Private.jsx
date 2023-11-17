import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const Private = ({children}) => {
    const {user ,loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className="flex justify-center h-[100vh] items-center ">
            
<span className="loading loading-spinner text-secondary w-40"></span>



        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>; }

export default Private;