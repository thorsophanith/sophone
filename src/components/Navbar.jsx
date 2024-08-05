import React, { useState } from "react";
import image1 from "../assets/image/logo-removebg-preview.png";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="w-full shadow-md">
      <div className="max-w-[1500px] m-auto flex items-center justify-between px-5 p-3">
        <div className="flex items-center gap-1">
            <img src={image1} alt="" className="w-[60px] bg-teal-200 rounded-full"/>
          <h1 className="font-bold font-serif text-2xl text-teal-500 drop-shadow-xl shadow-black">Sophon Space</h1>
        </div>
        <div className="max-md:hidden *:text-[18px] *:text-gray-600 *:duration-500 *:lg:text-[19px] flex gap-3 md:gap-5 font-medium">
            <a href="" className="hover:text-teal-500 hover:scale-90">Home</a>
            <a href="" className="hover:text-teal-500 hover:scale-90">Company</a>
            <a href="" className="hover:text-teal-500 hover:scale-90">Resources</a>
            <a href="" className="hover:text-teal-500 hover:scale-90">About Us</a>
            <a href="" className="hover:text-teal-500 hover:scale-90">Contact</a>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
            {!nav ? <AiOutlineClose size={25} className="md:hidden max-md:block"/> : <AiOutlineMenu size={25} className="md:hidden"/>}
        </div>
         
            <div className={!nav ? 'md:hidden fixed top-0 left-0 w-[60%] h-full bg-gray-100 *:duration-500 text-lg font-medium text-gray-600 *:drop-shadow-xl *:shadow-black' : 'fixed left-[-100%]'}>
                <div className="p-4 py-10 text-2xl font-serif flex items-center gap-2 text-teal-600 cursor-pointer ">
                <img src={image1} alt="" className="w-[55px]"/>
                Sophon Space</div>
            <p className="hover:bg-gray-200 p-4 hover:scale-90 hover:rounded-xl duration-700 hover:text-teal-500 cursor-pointer"><a href="" className=" hover:scale-90 px-10">Home</a></p>
            <p className="hover:bg-gray-200 p-4 hover:scale-90 hover:rounded-xl duration-700 hover:text-teal-500 cursor-pointer"><a href="" className=" hover:scale-90 px-10">Company</a></p>
            <p className="hover:bg-gray-200 p-4 hover:scale-90 hover:rounded-xl duration-700 hover:text-teal-500 cursor-pointer"><a href="" className=" hover:scale-90 px-10">Resources</a></p>
            <p className="hover:bg-gray-200 p-4 hover:scale-90 hover:rounded-xl duration-700 hover:text-teal-500 cursor-pointer"><a href="" className=" hover:scale-90 px-10">About Us</a></p>
            <p className="hover:bg-gray-200 p-4 hover:scale-90 hover:rounded-xl duration-700 hover:text-teal-500 cursor-pointer"><a href="" className=" hover:scale-90 px-10">Contact</a></p>
        </div></div>
      </div>
    
  );
}

export default Navbar;
