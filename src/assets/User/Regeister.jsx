import { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Auth/AuthProvider';

const Regeister = () => {
const{sighnUp}=useContext(AuthContext);
const location = useLocation();
const nvaigate = useNavigate();

const handleSubmitBtn=(e)=>{
   e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;

   if (!/[A-Z]/.test(password)) {
                
    toast.warning("Add one Upparcase Letter!")
    return

}
if (password.length < 6) {
toast.warning("Added At last 8 charcters!")
// alert("Added At last 8 charcters")
return
}
   
if (!/[!@#$%^&*()_+]/.test(password)) {
toast.warning("Added on special chracter!")
// alert("on special charcter")
return
}
     else{
        sighnUp(email,password)
        .then(result=>{
            console.log(result);
            nvaigate(location?.state? location.state : "/")
     toast.success("Succesfuly Created your Acoount.")
     
        })
        .catch(error =>{
     
            toast.warning(error.message)
      
        })
       return
     }
     








    }



    return (
        <div>
            <section className="   mx-auto   " >
    <div className="container flex items-center  justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={handleSubmitBtn} className="w-full max-w-md">
        <div className="flex md:ml-10 lg:ml-0  justify-center  items-center">
    <img className=" w-10 lg:w-14" src="https://i.ibb.co/Kyf9ZSH/Logo-removebg-preview.png" alt="" />
    <h1 className="text-xl md:text-4xl  font-ranacho  text-orange-500 drop-shadow-lg font-semibold "> <span className="text-black drop-shadow-lg font-semibold">Food</span> Rescue <span className="text-orange-800 font-semibold">Us</span></h1>
    </div>
            <div className="flex items-center justify-center mt-6">
              

                <a  className="w-1/3 pb-4 font-medium text-center text-orange-500 capitalize border-b-2 border-orange-500 dark:border-orange-400 ">
                    sign up
                </a>
            </div>

            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input name='name' type="text" className="block w-full py-3   border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username"/>
            </div>

          

            <div className="relative flex items-center mt-6">
                <span className="absolute px-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                </span>

                <input type="text" className="block w-full py-3 border rounded-lg px-11  focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo Url"/>
            </div>

            <div className="relative flex items-center mt-6">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input name='email' type="email" className="block w-full py-3 border rounded-lg px-11  focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
            </div>

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input name='password' type="password" className="block w-full px-10 py-3 border rounded-lg  focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
            </div>

          

            <div className="mt-6">
                <button type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                    Sign Up
                </button>

                <div className="mt-6 text-center ">
                    <Link to="/login" className="text-sm text-orange-500 hover:underline dark:text-orange-400">
                        Already have an account?
                    </Link>
                </div>
            </div>
        </form>
        <ToastContainer></ToastContainer>
    </div>
</section>
        </div>
    );
};

export default Regeister;