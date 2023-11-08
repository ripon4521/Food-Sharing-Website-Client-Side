import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './assets/Page/Navbar/Navbar'

function App() {


  return (
    <div className='bg-black'>
    <div className='border-b'>
      <Navbar></Navbar>

    </div>
   
        
      <Outlet></Outlet>
     
    </div>
  )
}

export default App
