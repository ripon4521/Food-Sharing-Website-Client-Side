

import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './assets/Page/Navbar/Navbar'

function App() {


  return (
    <>
    <div className='bg-gray-100 '>
    <Navbar></Navbar>
    </div>

        
      <Outlet></Outlet>
     
    </>
  )
}

export default App
