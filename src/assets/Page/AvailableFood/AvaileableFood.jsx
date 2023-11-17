import axios from "axios";
import {  useEffect, useState } from "react";
import Card from "./card";


// import { AuthContext } from "../../../Auth/AuthProvider";


const AvaileableFood = () => {

    const [inputValue, setInputValue] = useState("");
    const [istrue, setisTrue] = useState(false);
     const handleSearch =(e)=>{
       e.preventDefault();
     setInputValue(e.target.input.value);
     setisTrue(true);
     e.target.input.value ="";


     
     };



    const search = <>


<div className="flex">


<form onSubmit={handleSearch} >
    
         <input name="input" 
            type="text"
            placeholder="Search here...."
            className="input input-bordered md:w-[200px] lg:w-[200px]"
          />
          <input value="Search" className="p-3 rounded font-semibold bg-green-500 text-white" type="submit" />
         </form>
</div>
</>



    // const {loading,user}=useContext(AuthContext)
    const [foods,setFoods]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/aviableFood')
        .then(res=>setFoods(res.data))
        .catch(err=> console.log(err))
    },[])

// console.log(foods.data);
const foodSortedQuentity = foods.sort((a, b) => b.food_quantity - a.food_quantity);


const lowercaseData = inputValue.toLowerCase();

const [searchData, setSerachData] = useState([]);
useEffect(()=>{
   const filter = foodSortedQuentity.filter(donation => donation.food_name.toLowerCase().includes(lowercaseData));
   console.log(filter);
   setSerachData(filter);

},[foodSortedQuentity, lowercaseData]);


const handleShort=()=>{
//    console.log('Hello World');
const sortData = foods.sort((a, b) => b.expired_date - a.expired_date);
console.log(sortData);

}


    return (
     <div>
        <h1 className="text-center text-7xl text-gray-400 font-ranacho mt-20 drop-shadow-lg ">Avaible Foods Here: {foods?.length}</h1>
    
        <div className="flex justify-end container mx-auto lg:ml-4 my-6 gap-5">
          <div>
          {search}
          </div>
          <div>
        

        <button onClick={handleShort} className="btn btn-success">Sort By Expire Date</button>


          </div>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 container mx-auto gap-20">
        {
            istrue?searchData.map(food=><Card key={food._id} inputValue={inputValue} food={food} istrue={istrue}></Card>):
          
          foodSortedQuentity.map(food=><Card key={food._id} inputValue={inputValue} food={food} istrue={istrue}></Card>)
           }

            

        </div>
    
     
     </div>
    );
};

export default AvaileableFood;