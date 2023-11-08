import { useLoaderData } from "react-router-dom";





const ViewDetiails = () => {
const loader = useLoaderData()
const {_id,food_name,donator,food_quantity,pickup_location,expired_date,additional_notes,food_image,view_detail} =loader;

const divStyle = {
    backgroundImage: `url(${food_image})`,
   
  };

    return (
        <div  className=" my-20 flex justify-center" >
     <div className="flex w-[50%] h-[250px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="w-1/3 bg-cover" style={divStyle}  ></div>

    <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{food_name}</h1>

        <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">{additional_notes}</p>

        <h1 className="  text-gray-700 dark:text-gray-200 ">Expired Date: {expired_date}</h1>
        <h1 className="  text-gray-700 dark:text-gray-200 ">Food Quantity: {food_quantity}</h1>
        <div className="flex  gap-5 mt-3 items-center">
           <img className="w-10 h-10 rounded-full border-4" src={donator.image} alt="" />
            <h1 className="text-xl font-bold">{donator.name}</h1>
           
        </div>
        <button className="px-2 mt-3 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Food Request</button>
    </div>
</div>
        </div>
    );
};

export default ViewDetiails;