import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";




const FoodRequest = () => {

  const [data,setData]=useState([]);
    // const loader = useLoaderData();
    // console.log(loader);

    useEffect(()=>{
        axios.get('http://localhost:5000/foodRequest')
        .then(res=>setData(res.data))
        .catch(err=> console.log(err))
    },[])


    const handleDelte=(_id)=>{
      fetch(`http://localhost:5000/foodRequest/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Delivered' }),
      })
      .then(response => response.json())
      .then(da => {
        // Update the frontend status
        document.getElementById('status').innerText = da.status;
      })
      .catch(error => {
        console.error('Error:', error);
      });
    

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
            <Link id="status"  className="px-2 py-1 bg-orange-500 text-white rounded">{row.food_status}</Link>
            <button onClick={()=>handleDelte(row._id)} className="px-2 py-1 bg-orange-500 text-white rounded">Cancel Request</button>
           
        </div>
       }

];


  return (
    <div>
         <div className="p-10 ">
            <h1 className="text-center text-7xl my-20 font-ranacho text-gray-400 drop-shadow-lg">Mange My Food</h1>
            <DataTable
            columns={cloumns}
            data={data}
            className=""
          >
            
                
            </DataTable>
        </div>
    </div>
  );
};

export default FoodRequest;