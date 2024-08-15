import React from 'react';
import image1 from '../assets/image/Digital-Marketing-Transparent-Free-PNG.png'
import image2 from '../assets/image/R.png'
import image3 from '../assets/image/ffef64c97ee331d4f097919553874b36.png'

function Numhr() {
  return (
    <div id='team' >
        <h1 data-aos='fade-down' data-aos-once='true' class="py-12 text-center text-2xl md:text-3xl font-medium drop-shadow-xl shadow-black text-sky-500">Our Service</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 max-w-7xl m-auto">
            <div data-aos='fade-right' data-aos-delay='500' class="max-sm:w-[90%] max-md:w-[80%] grid text-center place-items-center gap-2 max-md:hover:shadow-lg p-8 duration-500 max-md:hover:scale-105 hover:max-md:bg-teal-50 ">
            <div className='animated rounded-full p-1'>
            <img src={image1} alt="" class="w-[140px] md:w-[150px]  h-[140px] md:h-[150px] p-4 rounded-full bg-white " />
            </div>
                <p class="text-xl text-gray-600">Digital Advertising</p>
                <p class="mt-4"><a href="https://t.me/sophonspace" class="text-center border-2 border-sky-300 hover:bg-blue-500 hover:text-white duration-500 rounded-full px-5 py-2 text-gray-400">Contact Us</a></p>
            </div>
            <div data-aos='fade-down'  class="max-sm:w-[90%] max-md:w-[80%] grid text-center place-items-center gap-2 max-md:hover:shadow-lg p-8 duration-500 max-md:hover:scale-105 hover:max-md:bg-teal-50 ">
                <img src={image2} alt="" class="w-[140px] md:w-[150px] bg-gradient-to-l rounded-full from-pink-400 to-sky-400 " />
                <p class="text-xl text-gray-600">Social Media Management</p>
                <p class="mt-4"><a href="https://t.me/sophonspace" class="text-center border-2 border-sky-300 hover:bg-blue-500 hover:text-white duration-500 rounded-full px-5 py-2 text-gray-400">Contact Us</a></p>
            </div>
            <div class="max-sm:w-[90%] max-md:w-[80%] grid text-center place-items-center gap-2 max-md:hover:shadow-lg p-8 duration-500 max-md:hover:scale-105 hover:max-md:bg-teal-50 ">
                <img data-aos='fade-left'  data-aos-delay='500' src={image3} alt="" class="w-[140px] md:w-[150px] bg-gradient-to-l rounded-full from-pink-400 to-sky-400 h-[140px] md:h-[150px] p-1 animated" />
                <p data-aos='fade-up'  data-aos-delay='300' class="text-xl text-gray-600">Social Media Product</p>
                <p data-aos='fade-up'  data-aos-delay='600' id='dog3' class="mt-4"><a href="https://t.me/sophonspace" class="text-center border-2 border-sky-300 hover:bg-blue-500 hover:text-white duration-500 rounded-full px-5 py-2 text-gray-400">Contact Us</a></p>
            </div>
        </div>
    </div>
  )
}

export default Numhr