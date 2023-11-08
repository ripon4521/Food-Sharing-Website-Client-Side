
 import banner from './banner.json'
import Lottie from "lottie-react";


const Banner = () => {
    return (
        <div className='flex justify-center flex-col-reverse md:flex-row  mt-10  items-center'>
            <div>
            <h1 className='lg:text-9xl md:text-7xl text-6xl font-ranacho drop-shadow-lg text-orange-500'>BE THE RESCUE.</h1>
            <p className='lg:text-5xl md:text-5xl text-4xl font-ranacho font-black drop-shadow-lg'>Fight hunger. help the planet.</p>

            <div>
                <button className='px-3 py-3 bg-orange-500 mt-2 font-popins font-bold rounded drop-shadow-lg  text-white'>Become a Voluntier</button>
            </div>
            </div>
            <div className='w-[500px] md:w-[800px]'>
        <Lottie animationData={banner}></Lottie>
            </div>
        </div>
    );
};

export default Banner;