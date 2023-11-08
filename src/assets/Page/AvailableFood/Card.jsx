
import { FcExpired } from 'react-icons/fc';
const Card = ({food}) => {

    
const {_id,food_name,donator,food_quantity,pickup_location,expired_date,additional_notes,food_image,view_detail} =food;
    return (
        <div>
                 <div>
            <div className="w-full max-w-sm overflow-hidden h-[600px]  rounded-lg shadow-lg dark:bg-gray-800">
    <img className="object-cover object-center w-full h-56" src={food_image} alt="avatar"/>

    <div className="flex items-center px-6 py-3 bg-green-900">
       

        <h1 className="mx-3 text-lg font-semibold ">{food_name}</h1>
    </div>

    <div className="px-6 py-4">
      <div className="flex items-center gap-5 ">
      <img className="w-[50px] h-[50px] rounded-full border-4 " src={donator?.image} alt="" />
          <h1 className="text-xl font-roboto  font-semibold drop-shadow-lg  dark:text-white">{donator?.name}</h1>

      </div>
        <p className="py-2 drop-shadow-lg text-xl  font-roboto hover:text-green-500 dark:text-gray-400">{additional_notes}</p>

        <div className="flex items-center mt-4   dark:text-gray-200">
            <svg aria-label="suitcase icon" className="w-6  hover:text-green-500 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 11H10V13H14V11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>
            </svg>

            <h1 className="px-2  hover:text-green-500 text-sm">Food Quantity: {food_quantity}</h1>
        </div>

        <div className="flex items-center mt-4   dark:text-gray-200">
            <svg aria-label="location pin icon" className="w-6  hover:text-green-500 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"/>
            </svg>

            <h1 className="px-2 hover:text-green-500  text-sm">Pickup Location: {pickup_location}</h1>
        </div>

        <div className="flex items-center mt-4   dark:text-gray-200">
           

          <FcExpired className='text-2xl text-black hover:text-green-500'>  </FcExpired>
          <h1 className="px-2 hover:text-green-500 text-sm">{expired_date}</h1>
        </div>
        <button className='bg-green-500 font-bold px-2 py-2 mt-2 rounded w-full'>View Details</button>
    </div>
</div>
        </div>
        </div>
    );
};

export default Card;