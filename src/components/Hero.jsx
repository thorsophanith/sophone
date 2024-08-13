import React from 'react';
import { ReactTyped } from 'react-typed';
import image1 from '../assets/image/logo.jpg';
import { FaFacebook, FaTelegram } from 'react-icons/fa';

function Hero() {
  return (
    <div id='dog1' className='shadow-md bg-gradient-to-t from-gray-50 to-gray-50 animated-background' data-aos='fade-down'>
      <div className='text-center py-40'>
        <div data-aos='fade-down' className='flex justify-center'>
          <img
            className="w-[20vh] shadow-xl rounded-full mb-5 object-cover object-center spin"
            alt="hero"
            src={image1}
          />
        </div>
        <p className='uppercase text-teal-600 font-serif'>we are hiring!</p>
        <h1 className='text-4xl md:text-6xl mb-5 font-bold text-teal-500 drop-shadow-2xl shadow-black'>
          <span data-aos='fade-left'>Sophon </span>
          <span data-aos='fade-right'>Space</span>
        </h1>
        <div>
          <p className='text-2xl md:text-4xl font-medium font-serif text-gray-400'>
            <ReactTyped
              className='text-blue-600'
              strings={["Welcome To", "Sophon Space", "Company"]}
              typeSpeed={150}
              backSpeed={150}
              loop
            />
          </p>
          <p className='mt-2 text-lg text-gray-400 px-4'>
            Bachelor’s degree in computer science, computer engineering, or information technology.
          </p>
        </div>
        <div className='mt-12 flex gap-5 justify-center'>
          <a
            data-aos='fade-right'
            href="https://www.facebook.com/shoponspaceofficail"
            className='bg-blue-500 px-3 py-3 text-gray-100 rounded-md hover:bg-blue-400 duration-300 hover:text-black font-medium font-serif flex items-center gap-2'
          >
            facebook <FaFacebook />
          </a>
          <a
            data-aos='fade-left'
            href="https://t.me/sophonspace1"
            className='bg-teal-500 px-3 py-3 text-gray-100 rounded-md hover:bg-teal-400 duration-300 hover:text-black font-medium flex items-center font-serif gap-2'
          >
            telegram <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
