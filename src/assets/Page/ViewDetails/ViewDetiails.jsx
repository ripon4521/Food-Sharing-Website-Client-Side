import Lottie from "lottie-react";
import { useLoaderData } from "react-router-dom";
import aniamton from "../../../../public/Animation - 1700118935954.json"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import { Helmet } from "react-helmet";




const ViewDetiails = () => {
const loader = useLoaderData()
const {_id,food_name,donator,food_quantity,pickup_location,expired_date,additional_notes,food_image,view_detail,food_status} =loader;

    const {user}=useContext(AuthContext);
    const email = user?.email;
    console.log(email);

const divStyle = {
    backgroundImage: `url(${food_image})`,
   
  };

  const requstInfo = {
    donator,pickup_location,expired_date,food_status,email
  }
 const handleRequest =()=>{
        axios.post("http://localhost:5000/foodRequest",requstInfo)
        .then(res=>console.log(res))
        .catch(err=> {
            alert('succesfully added')
            console.log(err)
        })
 }


    return (
       <div>
        <Helmet>
            <title>Home||view Details</title>
        </Helmet>
         <div  className=" lg:h-[60vh] my-10 flex flex-col md:flex-col lg:flex-row justify-center" >
            
            <div className=' w-[400px]  md:w-[650px]  '>
            <Lottie animationData={aniamton} ></Lottie>
        </div>
       
<div className="flex   lg:w-[50%]  md:h-[350px] overflow-hidden p-5 md:mt-32 rounded-lg shadow dark:bg-gray-800">
<div className="w-1/3 h-52 md:h-full bg-cover" style={divStyle}  ></div>

<div className="w-2/3 p-4 md:p-4">
   <h1 className="text-xl font-bold text-gray-800 dark:text-white">{food_name}</h1>

   <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">{additional_notes}</p>

   <h1 className="  text-gray-700 dark:text-gray-200 ">Expired Date: {expired_date}</h1>
   <h1 className="  text-gray-700 dark:text-gray-200 ">Food Quantity: {food_quantity}</h1>
   <div className="flex  gap-5 mt-3 items-center">
      <img className="w-10 h-10 rounded-full border-4" src={donator.image} alt="" />
       <h1 className="text-xl font-bold">{donator.name}</h1>
      
      
   </div>
  
   <button onClick={handleRequest} className="px-2 mt-3 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Food Request</button>
</div>
</div>

   </div>
       </div>
    );
};

export default ViewDetiails;