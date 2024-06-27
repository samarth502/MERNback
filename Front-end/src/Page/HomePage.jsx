import React from 'react'
// import FoodData from '../../data'
import toast, { Toaster } from "react-hot-toast";
import MixData from '../../MixData';
import ProductsList from '../Components/ProductsList';
import { Link } from 'react-router-dom';

import logo from "../assets/fruits.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useToken } from '../Strore/Auth';


const HomePage = ({cart,setCart}) => {
  const handleToast = (name) => toast.success(`Added ${name} `);

  // const {carts} = useToken();


  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };


  return (
    <>

{/* ........................Small header........................................ */}


<div className="fixed top-0 h-24 shadow-md w-full  px-2 md:px-4 z-50 bg-white ">

      <div className="flex w-full  items-center h-full justify-between px-16 max-xs:px-4  ">
        <Link to='/home'>
          <div className="h-[90px] w-[100px] max-xs:h-[60px] max-xs:w-[60px]">
            <img src={logo} className="h-full w-full" />
          </div>
        </Link>

            <Link to='/user'>
                 <div> <FaUserAlt size={40}/></div>
            </Link>
            
       
      
          <div className="text-2xl flex justify-between items-center gap-16 text-slate-600 relative">
            <Link to='/cart'>
              <BsCartFill size={40} />
              {cart.length >0 && (
                <div className="absolute -top-1 -right-1 text-white bg-red-500 h-5 w-5 rounded-full m-0 p-0 text-sm text-center font-extrabold ">
                {cart.length }
               </div>

              )}
            

              
            </Link>
          </div>
          
      </div>

    </div>



  {/*..................... Products lists ...... ................. */}

    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 px-16 mt-36 items-center max-xs:px-10">
      {MixData.map((item) => (
        <ProductsList
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          desc={item.desc}
          img={item.img}
          rating={item.rating}
          handleToast={handleToast}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>


    </>
  )
}

export default HomePage