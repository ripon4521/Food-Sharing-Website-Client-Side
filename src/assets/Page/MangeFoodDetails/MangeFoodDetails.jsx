import { useLoaderData } from "react-router-dom";


const MangeFoodDetails = () => {

    const data = useLoaderData();
    const {_id,food_name,donator,food_quantity,pickup_location,expired_date,additional_notes,food_image,view_detail,food_status} =data;
    console.log(data);

    return (
        <div className="h-[100vh]">
            <h1 className="text-9xl font-ranacho text-white drop-shadow-lg text-center my-20">Mange Food Details</h1>

        <div className="flex   justify-center">
            <img src={food_image} alt="" />
        <div className="w-[500px] px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{expired_date}</span>
        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">{food_status}</a>
    </div>

    <div className="mt-2">
        <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">{food_name}</a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{additional_notes}</p>
    </div>

    <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">Read more</a>

        <div className="flex items-center">
            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={donator.image} alt="avatar"/>
            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">{donator.name}</a>
        </div>
    </div>
</div>
        </div>
        </div>
    );
};

export default MangeFoodDetails;