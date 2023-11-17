import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './assets/Page/Navbar/Navbar'
import Footer from './assets/Page/Footer/Footer'

function App() {


  return (
    <div className='bg-yellow-400'>
    <div className='border-b'>
      <Navbar></Navbar>

    </div>
   
        
      <Outlet></Outlet>
     
     <div className='mt-28'>
    <Footer></Footer>
     </div>
    </div>
   
  )
}

export default App
