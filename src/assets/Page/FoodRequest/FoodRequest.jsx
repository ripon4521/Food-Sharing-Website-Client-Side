import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";




const FoodRequest = () => {

  const [data,setData]=useState([]);
    // const loader = useLoaderData();
    // console.log(loader);

    useEffect(()=>{
        axios.get('http://localhost:5000/foods')
        .then(res=>setData(res.data))
        .catch(err=> console.log(err))
    },[])


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
        selector:row => row.donator?.name
       },
       {
        name:'Action',
        cell:(row) => <div className="flex gap-4 ">
            <Link to={`/updateFood/${row._id}`}   className="px-2 py-1 bg-green-500 text-white rounded">Update</Link>
            <button onClick={()=>(row._id)}  className="px-2 py-1 bg-green-500 text-white rounded">Delete</button>
            <Link to={`/mange/${row._id}`} className="px-2 py-1 bg-green-500 text-white rounded">Mange</Link>
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