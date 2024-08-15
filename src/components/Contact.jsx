import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j99x40c', 'template_62cjpir', form.current, {
      publicKey: 'ovUZr5IEN3Rf2wlNY',
    })
    .then(
      (result) => {
        console.log(result.text);  // 'SUCCESS!'
        toast.success('Your message has been sent successfully!');
      },
      (error) => {
        console.log(error.text);  // 'FAILED...'
        toast.error('There was an error sending your message. Please try again.');
      }
    );
    e.target.reset();  // Clear the form
  };

  return (
    <div className='mt-6' data-aos='fade-down' data-aos-delay='300'>
      <ToastContainer />
      <section className="text-gray-600 body-font relative max-w-7xl m-auto">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-16 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3909.013165129752!2d104.90012097505344!3d11.550913088648944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMzJzAzLjMiTiAxMDTCsDU0JzA5LjciRQ!5e0!3m2!1sen!2skh!4v1723086270066!5m2!1sen!2skh"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-7 rounded shadow-md mr-8 ml-5 mt-3">
              <div className="lg:w-1/2 px-5">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1 max-md:text-sm">No 285, Street No 271, Sangkat Tumnob Tuek, Khan Boeng Keng Kang, Phnom Penh</p>
              </div>
              <div className="lg:w-1/2 px-5 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-blue-500 leading-relaxed">mphanit787@email.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">+855-709-817-77</p>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <form ref={form} onSubmit={sendEmail} className='p-3'>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">Contact Us</h2>
              <p className="leading-relaxed mb-5 text-gray-600"></p>
              <div data-aos='fade-down' data-aos-delay='600' className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder='Username'
                  required
                  name="user_name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div data-aos='fade-down' data-aos-delay='400' className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder='Email'
                  required
                  name="user_email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div data-aos='fade-down' data-aos-delay='200' className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  name="message"
                  placeholder='Message'
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <input
                id='dog5'
                type='submit'
                className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer"
                value='Submit'
              />
              <p className="text-xs text-gray-500 mt-3">You can submit to send contacts to @gmail</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
