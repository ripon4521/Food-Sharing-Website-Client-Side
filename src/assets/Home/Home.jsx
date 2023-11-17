import {  useEffect, useState } from "react";
// import Navbar from "../Page/Navbar/Navbar";
import axios from "axios";
import FeautredsCrads from "../Page/FeautreCards/FeautredsCrads";
import Banner from "../Page/Banner/Banner";

// import { useLoaderData } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Atilin from "../Page/Atilin/Atilin";
import Mobileapp from "../Page/MobileApp/Mobileapp";
import { Helmet } from "react-helmet";

const Home = () => {
    useEffect(()=>{
        Aos.init( {duration:"500", delay:"500"})
      }, [])
    




    const [data ,setData]=useState([]);



useEffect(()=>{

    axios.get('http://localhost:5000/foods')
    .then(
        response=>{
          setData(response.data);
        }
    )
    .catch(err => {
        console.log(err)
    })

},[])

const foodSortedQuentity = data.sort((a, b) => b.food_quantity - a.food_quantity);
// console.log(booksSortedByYearAsc);
// console.log(data);

    return (
        <div>
          <Helmet>
            <title>Food Rescue||Home</title>
          </Helmet>
     
              <div>
                <Banner></Banner>
              </div>
              <h1 className=" drop-shadow-lg pl-6 w-full md:w-[50%] lg:w-[20%] mx-auto text-center my-10 border-b-4 border-orange-500  font-ranacho text-7xl text-gray-500">Featured <span className="text-orange-500">Foods</span></h1>

           <div data-aos="fade-up" className="grid  grid-cols-1 pl-10 md:p-5 lg:p-0 md:grid-cols-2 lg:grid-cols-3  container mx-auto gap-20" >

           

{
    foodSortedQuentity.slice(0,6).map((food)=>{
  return <FeautredsCrads food={food} key={food._id}></FeautredsCrads>
    })
}
   
           </div>

           <div>
          <Atilin></Atilin>
          </div>

<div>
  <Mobileapp></Mobileapp>
</div>
          
        </div>
    );
};

export default Home;