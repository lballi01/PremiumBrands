import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../../constants";

import wine from './wineCellar.jpg';

const Products = () => {
  return (
    <section id='products'>
    <div className="flex items-center justify-center flex-col h-[900px] shadow-md my-0 py-5 relative ">
      <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${wine})`, filter: 'grayscale(33%) opacity(80%)', zIndex:1 }}/>
      
      <h1 className='py-5 z-20 text-white text-left' >Products</h1>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        
        {ServiceData.map((item) => (
          
          <SwiperSlide key={item.title}
          
          className='z-20'>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[400px] w-[350px] lg:h-[600px] lg:w-[500px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-80 group-hover:scale-50" >
                
              </div>
              
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <div className="relative ">
                  <p className="lg:text-[18px] text-transparent group-hover:text-white text-center">{item.content}</p>
                </div>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
          
        ))}
      </Swiper>
      </div>
      </section>
   
    
  )
}

export default Products