import axios from "axios";
import {  useEffect, useState } from "react";
import Card from "./card";
// import { AuthContext } from "../../../Auth/AuthProvider";


const AvaileableFood = () => {
    // const {loading,user}=useContext(AuthContext)
    const [foods,setFoods]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/aviableFood')
        .then(res=>setFoods(res.data))
        .catch(err=> console.log(err))
    },[])
// console.log(foods.data);
const foodSortedQuentity = foods.sort((a, b) => b.food_quantity - a.food_quantity);

    return (
     <div>
        <h1 className="text-center text-7xl text-gray-400 font-ranacho my-20 drop-shadow-lg ">Avaible Foods Here: {foods?.length}</h1>
    

  
        <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-20">
        {
          
          foodSortedQuentity.map(food=><Card key={food._id} food={food}></Card>)
           }


        </div>
     
     </div>
    );
};

export default AvaileableFood;