
// import Swal from 'sweetalert2';

import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";

const AddFood = () => {
    const value = 'Available'
    const {user}=useContext(AuthContext)
    console.log(user);


// const name=user.disp

    const handleAddFood =(e)=>{
        e.preventDefault();
        const form = e.target;
        
        const food_name = form.food_name.value;
        const food_quantity = form.food_quantity.value;
        const pickup_location = form.pickup_location.value;
        const additional_notes = form.additional_notes.value;
        const expired_date = form.expired_date.value;
        const food_image = form.food_image.value;
        const image=form.image.value;
        const donator={
            image
        }
        // const DimgLink = form.desc.value;
const newProduct = {
    

    food_name,
    food_quantity,
    pickup_location,
    additional_notes,
    expired_date,
    food_image,
    donator
}
// console.log(newProduct);

//     fetch('https://brand-shop-server-qpd4wio2i-dev-ripons-projects.vercel.app/brand',{
//         method:"POST",
//         headers:{
//             "content-type":"application/json"
//         },
//         body:JSON.stringify(newProduct)
  
//     })
    
//     .then(res=>res.json())
//     .then(data => {
//         console.log(data)
//         if (data.insertedId) {
//           Swal.fire({
//             position: 'top-end',
//             icon: 'success',
//             title: 'Your product has been added!',
//             showConfirmButton: false,
//             timer: 1500
//           })

           
//         }
//     })

// console.log(newProduct);
   

    }


    return (
        <div className='bg-gray-100 h-screen'>
   
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14  mx-auto">
  <div className="max-w-xl mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold drop-shadow-lg mt-10  text-orange-500 sm:text-4xl dark:text-orange">
     Add Your Product here !
      </h1>

      <p className="mt-1 text-orange-600 dark:text-orange-400">
  
      </p>
    </div>

    <div className="mt-16">
    
      <form onSubmit={handleAddFood}>
        <div className="grid gap-4 lg:gap-6">
 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

            <div>
              <label className="block drop-shadow-lg text-orange-500 mb-2 font-roboto ">Food name</label>
              <input required name='food_name' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product name here"/>
            </div>


            <div>
              <label  className="block drop-shadow-lg text-orange-500 mb-2 font-roboto">Food Quantity</label>
              <input type="text" name='food_quantity' className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write brand name here"/>
            </div>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label className="block drop-shadow-lg text-orange-500 mb-2 font-roboto ">Pickup Location</label>
              <input name='pickup_location' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product type here"/>
            </div>

            <div>
              <label  className="block drop-shadow-lg text-orange-500 mb-2 font-roboto">Donator Name</label>
              <input name='Dname' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product rating here"/>
            </div>
          </div>




           

         
           
     
          

     
          <div>
              <label  className="block drop-shadow-lg text-orange-500 mb-2 font-roboto">Food Image Link</label>
              <input name='food_image' type="text" className="block w-full  py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product photo url here"/>
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label className="block drop-shadow-lg text-orange-500 mb-2 font-roboto ">Expired Date</label>
              <input name='expired_date' type="date" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product price here"/>
            </div>
            
            <div>
              <label  className="block drop-shadow-lg text-orange-500 mb-2 font-roboto">Food Status</label>
              <input defaultValue={value} name='status' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product rating here"/>
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

export default AddFood;