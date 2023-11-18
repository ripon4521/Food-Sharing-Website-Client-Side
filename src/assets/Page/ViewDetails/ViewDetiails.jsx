import Lottie from "lottie-react";
import { Link, useLoaderData } from "react-router-dom";
import aniamton from "../../../../public/Animation - 1700118935954.json"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import { Helmet } from "react-helmet";
import moment from 'moment';
import Swal from "sweetalert2";







const ViewDetiails = () => {
  // Example code in your JavaScript file
  const now = moment();
  const formattedDate = now.format('MMMM Do YYYY, h:mm:ss a');
  // console.log(formattedDate);

 
const loader = useLoaderData()
const {_id,food_name,donator,food_quantity,pickup_location,expired_date,additional_notes,food_image,view_detail,food_status} =loader;

    const {user}=useContext(AuthContext);
    const email = user?.email;
    console.log(email);

const divStyle = {
    backgroundImage: `url(${food_image})`,
   
  };




 const handleRequest =(e)=>{
  e.preventDefault();
 
  const form = e.target;
  
  const request_date = form.request_date.value;
  const donation_money = form.donation_money.value;
  const additional_notes = form.additional_notes.value;
  

  const requstInfo = {
    donator,pickup_location,expired_date,email,food_image,request_date,donation_money,additional_notes
  }
console.log(requstInfo);

        axios.post("https://assignment-server-side-fawn.vercel.app/foodRequest",requstInfo)
        .then(res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Food Add SuccesFully !',
            showConfirmButton: false,
            timer: 1500
          })
        console.log(res);
        })
        .catch(err=> {
    
            
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
  
   <button className="bg-green-400 text-white px-2 py-2 mt-4 rounded" onClick={()=>document.getElementById('my_modal_1').showModal()}>Food Request</button>
</div>

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <img src={food_image} alt="" />
  <div className="max-w-xl mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold drop-shadow-lg mt-10 md:text-7xl  font-ranacho text-green-500 dark:text-green">
     Single Food Details
      </h1>

      <p className="mt-1 text-green-600 dark:text-green-400">
  
      </p>
    </div>

    <div className="mt-16">
    
      <form onSubmit={handleRequest}>
        <div className="grid gap-4 lg:gap-6">
 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

            <div>
              <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Food name</label>
              <input readOnly defaultValue={food_name} name='food_name' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product name here"/>
            </div>


            <div>
              <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Food Id</label>
              <input readOnly defaultValue={_id} type="text" name='food_quantity' className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write brand name here"/>
            </div>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Food Donator Name</label>
              <input readOnly  defaultValue={donator.name} name='pickup_location' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product type here"/>
            </div>
            <div>
              <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Food Donator Email</label>
              <input readOnly defaultValue={user?.email} name='food_image' type="text" className="block w-full  py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product photo url here"/>
            </div>
        
          </div>




           

         
           
     
          

     
      

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Expired Date</label>
              <input readOnly defaultValue={expired_date} name='expired_date' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product price here"/>
            </div>
            <div>
              <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Request  Date</label>
              <input readOnly defaultValue={formattedDate} name='request_date' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product price here"/>
            </div>
            
            <div>
              <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Pickup Location</label>
              <input readOnly defaultValue={pickup_location}  name='status' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product rating here"/>
            </div>
            

           
          </div>
          <div>
              <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Donation Money</label>
              <input   name='donation_money' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Donate money Here"/>
            </div>
     
        
        


<div>
<div>
              <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Additional Notes</label>
              <input defaultValue={additional_notes} name='additional_notes' type="text" className="block h-20 w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product description"/>
            </div>
</div>

        </div>
      

        <div className="mt-6 grid">
          <button  type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-green-600 hover:bg-green-700 border border-transparent text-sm lg:text-base text-white font-roboto drop-shadow-lg font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-green-800">Food Request</button>
        </div>

      
      </form>
   
    </div>
  </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>

   </div>
       </div>
    );
};

export default ViewDetiails;