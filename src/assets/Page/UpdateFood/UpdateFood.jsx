import axios from "axios";
import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";


const UpdateFood = () => {

    const [food,setFood] =useState([])

    
    
    useEffect(()=>{
       axios.get('http://localhost:5000/aviableFood')
       .then(res=> setFood(res.data))
       .catch(error=> console.log(error))
    },[])

    // const value = food.food_name

console.log(food);
//     const handleUpdateProduct =(e)=>{
//         e.preventDefault();
//         const form = e.target;
//         const productName = form.name.value;
//         const brandName = form.brand.value;
//         const typeName = form.type.value;
//         const rating = form.rating.value;
//         const url = form.url.value;
//         const price = form.price.value;
     
// const updateProduct = {
//     productName,
//     brandName,
//     typeName,
//     rating,
//     price,
//     url
// }
// // console.log(newProduct);

//     fetch(`https://brand-shop-server-cyan.vercel.app
// /update/${phone._id}`,{
//         method:"PUT",
//         headers:{
//             "content-type":"application/json"
//         },
//         body:JSON.stringify(updateProduct)
  
//     })
    
//     .then(res=>res.json())
//     .then(data => {
//         console.log(data)
//         if (data. modifiedCount > 0) {
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Your product has been updated',
//                 showConfirmButton: false,
//                 timer: 1500
//               })

           
//         }
//     })

   

//     }
// const {_id,food_name,donator,food_quantity,pickup_location,expired_date,additional_notes,food_image,view_detail} =food;
    return (
      <div className='bg-black h-screen'>
   
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14  mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold drop-shadow-lg mt-10 md:text-7xl  font-ranacho text-orange-500 dark:text-orange">
          Update Your Food here !
            </h1>
      
            <p className="mt-1 text-orange-600 dark:text-orange-400">
        
            </p>
          </div>
      
          <div className="mt-16">
          
            <form >
              <div className="grid gap-4 lg:gap-6">
       
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
      
                  <div>
                    <label className="block drop-shadow-lg text-orange-500 mb-2 font-roboto ">Food name</label>
                    <input  name='food_name' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product name here"/>
                  </div>
      
      
                  <div>
                    <label  className="block drop-shadow-lg text-orange-500 mb-2 font-roboto">Food Quantity</label>
                    <input defaultValue={food.food_quantity} type="text" name='food_quantity' className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write brand name here"/>
                  </div>
      
                </div>
      
      
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block drop-shadow-lg text-orange-500 mb-2 font-roboto ">Pickup Location</label>
                    <input name='pickup_location' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product type here"/>
                  </div>
                  <div>
                    <label  className="block drop-shadow-lg text-orange-500 mb-2 font-roboto">Food Image Link</label>
                    <input name='food_image' type="text" className="block w-full  py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product photo url here"/>
                  </div>
              
                </div>
      
      
      
      
                 
      
               
                 
           
                
      
           
            
      
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block drop-shadow-lg text-orange-500 mb-2 font-roboto ">Expired Date</label>
                    <input name='expired_date' type="date" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product price here"/>
                  </div>
                  
                  <div>
                    <label  className="block drop-shadow-lg text-orange-500 mb-2 font-roboto">Food Status</label>
                    <input name='status' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product rating here"/>
                  </div>
      
                 
                </div>
           
              
              
      
      
      <div>
      <div>
                    <label  className="block drop-shadow-lg text-orange-500 mb-2 font-roboto">Additional Notes</label>
                    <input name='additional_notes' type="text" className="block h-20 w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product description"/>
                  </div>
      </div>
      
              </div>
            
      
              <div className="mt-6 grid">
                <button type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-orange-600 hover:bg-orange-700 border border-transparent text-sm lg:text-base text-white font-roboto drop-shadow-lg font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-orange-800">Add Food</button>
              </div>
      
            
            </form>
         
          </div>
        </div>
      </div>
      
              </div>
    );
};

export default  UpdateFood ;
    ;