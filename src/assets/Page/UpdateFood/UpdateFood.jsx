
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";

import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet";



const UpdateFood = () => {
  const value = 'Availeavle'
 const food =useLoaderData();
 const {user} = useContext(AuthContext)
 
    
    

    const {_id,food_name,food_quantity,pickup_location,expired_date,additional_notes,food_image,donator} =food;

console.log(food);
    const handleUpdateProduct =(e)=>{
        e.preventDefault();
        const form = e.target;
        const  food_name= form.food_name.value;
        const additional_notes = form.additional_notes.value;
        const food_quantity = form.food_quantity.value;
        const expired_date = form.expired_date.value;
        const pickup_location = form.pickup_location.value;


        const donator = {
         image :user.photoURL,
          name: user.displayName
        }
  
        // console.log(donator);
     
const updateProduct = {
  food_name,
    additional_notes,
    food_quantity,
    expired_date,
    pickup_location,
    donator
  
}

console.log(updateProduct);



// axios.put(`http://localhost:5000/foods/${_id}`)
// .then(res=>res.json())
// .then(data=>{
//   if (data. modifiedCount > 0) {
//     Swal.fire({
//       position: 'top-end',
//       icon: 'success',
//       title: 'Your product has been updated',
//       showConfirmButton: false,
//       timer: 1500
//     })
//   }
// })



// console.log(newProduct);

    fetch(`https://assignment-server-side-fawn.vercel.app/foods/${_id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updateProduct)
  
    })
    
    .then(res=>res.json())
    .then(data => {
        
        if (data. modifiedCount > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your product has been updated',
                showConfirmButton: false,
                timer: 1500
              })
              console.log(data)

           
        }
    })

   

    }


// const {_id,food_name,donator,food_quantity,pickup_location,expired_date,additional_notes,food_image,view_detail} =food;
    return (
      <div className=' '>
        <Helmet>
          <title>Mange||Update</title>
        </Helmet>
   
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14  mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold drop-shadow-lg mt-10 md:text-7xl  font-ranacho text-green-500 dark:text-green">
          Update Your Food here !
            </h1>
      
            <p className="mt-1 text-green-600 dark:text-green-400">
        
            </p>
          </div>
      
          <div className="mt-16">
          
            <form onSubmit={handleUpdateProduct}>
              <div className="grid gap-4 lg:gap-6">
       
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
      
                  <div>
                    <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Food name</label>
                    <input defaultValue={food_name}  name='food_name' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product name here"/>
                  </div>
      
      
                  <div>
                    <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Food Quantity</label>
                    <input defaultValue={food_quantity} type="text" name='food_quantity' className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write brand name here"/>
                  </div> 
      
                </div>
      
      
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Pickup Location</label>
                    <input defaultValue={pickup_location} name='pickup_location' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product type here"/>
                  </div>
                  <div>
                    <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Food Image Link</label>
                    <input defaultValue={food_image} name='food_image' type="text" className="block w-full  py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product photo url here"/>
                  </div>
              
                </div>
      
      
      
      
                 
      
               
                 
           
                
      
           
            
      
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Expired Date</label>
                    <input defaultValue={expired_date} name='expired_date' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product price here"/>
                  </div>
                  
                  <div>
                    <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Food Status</label>
                    <input defaultValue={value} name='status' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product expired_date here"/>
                  </div>
      
                 
                </div>
           
              
              
      
      
      <div>
      <div>
                    <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Additional Notes</label>
                    <input defaultValue={additional_notes} name='additional_notes' type="text" className="block h-20 w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product description"/>
                  </div>
      </div>
      
              </div>
            
      
              <div className="mt-6 grid">
                <button type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-green-600 hover:bg-green-700 border border-transparent text-sm lg:text-base text-white font-roboto drop-shadow-lg font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-green-800">Update Food</button>
              </div>
      
            
            </form>
         
          </div>
        </div>
      </div>
      
              </div>
    );
};

export default  UpdateFood ;
    





