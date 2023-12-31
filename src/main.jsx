import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthProvider from './Auth/AuthProvider.jsx';
import Login from './assets/User/Login.jsx';
import Regeister from './assets/User/Regeister.jsx';
import Home from './assets/Home/Home.jsx';
import AddFood from './assets/Page/AddFood/AddFood.jsx';
import Private from './Private/Private.jsx';
import AvaileableFood from './assets/Page/AvailableFood/AvaileableFood.jsx';
import MangeFood from './assets/Page/MangeFood/MangeFood.jsx';
import UpdateFood from './assets/Page/UpdateFood/UpdateFood.jsx';
import ViewDetiails from './assets/Page/ViewDetails/ViewDetiails.jsx';

import FoodRequest from './assets/Page/FoodRequest/FoodRequest.jsx';
import Error from './assets/Page/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement: <Error></Error>,
    // loader: rootLoader,
    children: [
      {
        path:"/",
        element:<Home></Home>,
  
      },{
        path:"/viewDetails/:_id",
        element:<ViewDetiails></ViewDetiails>,
        loader:({params})=>fetch(`https://assignment-server-side-fawn.vercel.app/foods/${params._id}`)
        
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element:<Regeister></Regeister>
      },
      {
        path:"/addfood",
        element:<Private><AddFood></AddFood></Private>
      },{
        path:"/availeableFood",
        element:<Private><AvaileableFood></AvaileableFood></Private>
      },{
        path:"/mangeFood",
        element:<Private><MangeFood></MangeFood></Private>,
   
      },{
        path:"/updateFood/:_id",
        element:<Private><UpdateFood></UpdateFood></Private>,
        loader:({params})=>fetch(`https://assignment-server-side-fawn.vercel.app/foods/${params._id}`)
       
      },
      {
        path:"/mange/:_id",
        element:<Private><ViewDetiails></ViewDetiails></Private>,
        loader:({params})=>fetch(`https://assignment-server-side-fawn.vercel.app/foods/${params._id}`)
      }
      ,{
        path:"/foodRequest",
        element:<FoodRequest></FoodRequest>
      }
     
        
  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router}>

 </RouterProvider>
 </AuthProvider>
  </React.StrictMode>,
)
