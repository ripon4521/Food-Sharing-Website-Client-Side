import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const MangeFood = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/aviableFood')
        .then(res=>setData(res.data))
        .catch(err=> console.log(err))
    },[])
    console.log(data);
    const {_id,food_name,donator,food_quantity,pickup_location,expired_date,additional_notes,food_image,view_detail} =data;

    const cloumns =[
        {
            name:'Food Image',
            selector:(row) => <img width={50} height={50} src={row.food_image}></img>
        },{
            name:'Food Name',
            selector:row => row.food_name
        },
        {
            name:'Quentity',
            selector:row => row.food_quantity
        },
           {
            name:'Expried Date',
            selector:row => row.expired_date
           },{
            name:'Donator',
            selector:row => row.donator.name
           },
           {
            name:'Action',
            cell:(row) => <div className="flex gap-4 ">
                <button onClick={handleUpdate} className="px-2 py-1 bg-green-500 text-white rounded">Update</button>
                <button className="px-2 py-1 bg-green-500 text-white rounded">Delete</button>
                <button className="px-2 py-1 bg-green-500 text-white rounded">Mange</button>
            </div>
           }

    ];

  
// Curd Operation With Axois
    const handleUpdate=()=>{
        // console.log('Updated');

    }
    
    return (
        <div className="p-10">
            <h1 className="text-center text-7xl my-20 font-ranacho text-white drop-shadow-lg">Mange My Food</h1>
            <DataTable
            columns={cloumns}
            data={data}
          >
            
                
            </DataTable>
        </div>
    );
};

export default MangeFood;