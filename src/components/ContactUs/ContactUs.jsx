import camel from './camel.jpg';
import React, { useState } from "react";


const ContactUs = () => {
 
  return (
    <section
      id="contactus"
      className={` flex-col relative card`}
    >
    <div  className="flex items-center justify-center flex-col h-[900px] shadow-md my-0 py-5 relative">
    <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${camel})`, filter: 'grayscale(50%) opacity(100%)' }}></div>
      <div className="container mx-auto flex flex-wrap justify-between items-center z-20">
        <div className="w-full mb-4 sm:mb-0  md:flex">
          <div className="w-full md:w-2/3 pr-8 bg-white text-black py-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary-color text-center">
              Contact Us
            </h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label className="block font-medium mb-2 text-primary-color">
                  Name
                </label>
                <input
                  className="w-full p-2 border-gold bg-transparent text-primary-color"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className="mb-4 ">
                <label className="block text-primary-color font-medium mb-2">
                  Email
                </label>
                <input
                  className="w-full p-2 border-gold  bg-transparent text-primary-color"
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-primary-color font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-2 border-gold bg-transparent text-primary-color"
                  rows="4"
                  placeholder="Your message..."
                  name="message"
                />
              </div>
              <div className="mb-4">
                <button className="button-style" type="submit">Send Message</button>
              </div>
            </form>
          </div>
 
          {/* Address and Social Media Links */}
          <div className="w-full md:w-2/3 text-center bg-white text-black py-10">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-9 text-primary-color text-center">
                Our Address
              </h2>
              <p className="text-primary-color mb-4">
                Unrivalled Mixed Martial Arts
                <br />
                Unit 1, Harvest Works, 102 Harvest Ln, Neepsend
                <br />
                Sheffield S3 8EG
                <br />
                South Yorkshire
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
 
export default ContactUs;