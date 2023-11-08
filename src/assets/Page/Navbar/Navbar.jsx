import { Link } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AiOutlineArrowRight  } from 'react-icons/ai';
// import AddFood from "../AddFood/AddFood";

const userImg ='https://i.ibb.co/wYvvGyV/user-icon-image-placeholder-removebg-preview.png'

const Navbar = () => {

    const {user , logOut} = useContext(AuthContext);


    const handleLogout =()=>{
        logOut()
        .then(result =>{
            console.log(result);
            toast.success("Logout Succesfull")
          
            
        })
        .catch(error => console.log(error.message))
      }
    

    const navlink = <div className="flex  flex-col md:flex-col lg:flex-row gap-8 ">

      
      {
        user? <div className="flex  flex-col md:flex-col lg:flex-row gap-8 ">
            <Link className=" font-popins  hover:text-green-500 font-semibold drop-shadow-lg"><a>Home</a></Link>
        <Link to="/availeableFood" className=" font-popins  hover:text-green-500 font-semibold drop-shadow-lg"><a>Available Foods</a></Link> 
        <Link to="/addfood"  className=" font-popins hover:text-green-500 font-semibold drop-shadow-lg"><a>Add Food</a></Link>
          <Link to='/mangeFood' className=" font-popins  hover:text-green-500 font-semibold drop-shadow-lg"><a>Manage My Foods</a></Link>
          <Link className=" font-popins  hover:text-green-500 font-semibold drop-shadow-lg"><a>My Food Request</a></Link>
        </div>: 
        <div className="flex  flex-col md:flex-col lg:flex-row gap-8 ">
        <Link className=" font-popins hover:text-green-500 font-semibold drop-shadow-lg"><a>Home</a></Link>
        <Link className=" font-popins  hover:text-green-500 font-semibold drop-shadow-lg"><a>Available Foods</a></Link> 
       
      </div >
      }
     
    
     

    </div>

    return (
       <div className="">
         <div className=" container mx-auto  ">
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        navlink
       }
      </ul>
    </div>
       {/* Logo  */}
    <div className="flex md:ml-10 lg:ml-0  justify-center  items-center">
    <img className=" w-10 lg:w-14" src="https://i.ibb.co/Kyf9ZSH/Logo-removebg-preview.png" alt="" />
    <h1 className="text-xl md:text-4xl  font-ranacho  text-green-500 drop-shadow-lg font-semibold "> <span className="text-black drop-shadow-lg font-semibold">Food</span> Rescue <span className="text-green-800 font-semibold">Us</span></h1>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
{
    navlink
}

    </ul>
  </div>
  <div className="navbar-end">
  {/* <Link to="/login" className=" font-popins px-4 py-2 text-white rounded hover:bg-green-600 bg-green-500 drop-shadow-lg font-semibold"><a>Login</a></Link> */}
  

  {
    user ?
     <div className="flex gap-2">
      <div >
    {
      user ? <img className="w-12 border-4 rounded-full" src={user.photoURL? user.photoURL : userImg} alt="" /> : <img className="w-10 mr-5" src={userImg} alt="" />
    }
  </div>

      <button onClick={handleLogout}>
    <a className="  font-semibold flex items-center justify-center gap-1 bg-green-500 text-white px-2 py-2 rounded">Logout <span><AiOutlineArrowRight></AiOutlineArrowRight></span></a></button>
    
    </div> 
    :
    <div>
    <Link to="/login">
  <a className="  font-semibold flex items-center justify-center gap-1 bg-green-400 text-white px-2 py-2 rounded">Sign In <span><AiOutlineArrowRight></AiOutlineArrowRight></span></a></Link>
    </div>
  }
</div>



</div>
        </div>
       </div>
    );
};

export default Navbar;