import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";




const FoodRequest = () => {

  const [data,setData]=useState([]);
    // const loader = useLoaderData();
    // console.log(loader);
    const {user}=useContext(AuthContext)
   

    useEffect(()=>{
        axios.get('http://localhost:5000/foodRequest')
        .then(res=>setData(res.data))
        .catch(err=> console.log(err))
    },[])
    console.log(data);
    const filter = data.filter(item => item.email == user?.email);


    const handleDelte=(_id)=>{
 axios.delete(`http://localhost:5000/foodRequest/${_id}`)
    .then(res=>console.log(res))
    .catch(err=> console.log(err))

window.location.reload()
}


  const cloumns =[
    {
        name:'Food Image',
        selector:(row) => <img width={50} height={50} src={row.food_image}></img>
    },{
        name:'Donar Name',
        selector:row => row.donator?.name
    },
    {
        name:'Pickup Location',
        selector:row => row.pickup_location
    },
       {
        name:'Expried Date',
        selector:row => row.expired_date
       },{
        name:'Donator',
        selector:row => row.donator?.name
       },
       {
        name:'Action',
        cell:(row) => <div className="flex gap-4 ">
            <Link   className="px-2 py-1 bg-orange-500 text-white rounded">Availeable</Link>
            <button onClick={()=>handleDelte(row._id)}  className="px-2 py-1 bg-orange-500 text-white rounded">Cancel Request</button>
            {/* onClick={()=>handleDelte(row._id)} */}
        </div>
       }

];


  return (
    <div>
         <div className="p-10 ">
            <h1 className="text-center text-7xl my-20 font-ranacho text-gray-400 drop-shadow-lg">Mange My Food</h1>
            <DataTable
            columns={cloumns}
            data={filter}
            className=""
          >
            
                
            </DataTable>
        </div>
    </div>
  );
};

export default FoodRequest;