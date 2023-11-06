import { Link } from "react-router-dom";


const Navbar = () => {

    const navlink = <div className="flex  flex-col md:flex-col lg:flex-row gap-8 ">

      <Link className=" font-popins hover:text-orange-500 font-semibold drop-shadow-lg"><a>Home</a></Link>
      <Link className=" font-popins hover:text-orange-500 font-semibold drop-shadow-lg"><a>Available Foods</a></Link>
      <Link className=" font-popins hover:text-orange-500 font-semibold drop-shadow-lg"><a>Add Food</a></Link>
      <Link className=" font-popins hover:text-orange-500 font-semibold drop-shadow-lg"><a>Manage My Foods</a></Link>
      <Link className=" font-popins hover:text-orange-500 font-semibold drop-shadow-lg"><a>My Food Request</a></Link>
    
     

    </div>

    return (
        <div className="container mx-auto mt-2 ">
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
    <div>
    {/* <img className="w-20" src="../../../../public/favicon.ico" alt="" /> */}
    <h1 className="text-3xl md:text-4xl  font-ranacho ml-[5px] text-orange-500 drop-shadow-lg md:ml-10 ">Food Rescue Us</h1>
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
  <Link className=" font-popins px-4 py-2 text-white rounded hover:bg-orange-600 bg-orange-500 drop-shadow-lg font-semibold"><a>Login</a></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;