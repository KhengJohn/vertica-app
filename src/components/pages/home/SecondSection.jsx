import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const swiperData = [
    {
        title: "Adaptable 2-bedroom design (Ire-T'oko-t'aya)",
        description: 'From single life to family bliss, your home evolves with you',
        img: "/assets/images/ss1.png"
    },
    {
        title: "AI-powered smart home (Opolo-Pipe - Intelligence)",
        description: 'Cutting-edge technology at your fingertips',
        img: "/assets/images/ss1b.png"
    },    {
        title: "25%-50% more energy efficient (Ire-Owo)",
        description: 'Save money while contributing to a sustainable future',
        img: "/assets/images/ss1c.png"
    },    {
        title: "Built-in garden patch (Ire-aiku)",
        description: 'Nurture your health and connect with nature',
        img: "/assets/images/ss1d.png"
    },    {
        title: "Natural cooling system (Ire abori-ota)",
        description: ' Overcome environmental challenges effortlessly',
        img: ''
    },    {
        title: " Income-generating potential (Ire-Owo)",
        description: 'Transform your home into a financial asset',
        img: ''
    },
]

const SecondSection = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen px-10 text-center'>
        <h2 className='text-[28px] font-bold'>Key Features with <span className="text-[#1C1C84]">Omoluàbí</span> Values</h2>
        <span className='text-[18px] text-[#404040]'>Experience the Future of Nigerian Living, Inspired by Yoruba Wisdom</span>
        <>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {swiperData.map((items, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-start rounded-lg w-[481px] h-[470px] gap-[24px]">
   <p className='text-[24px] text-[#0F0F0F]'>{items.title}</p>
   <p className='text-[18px] text-[#404040] w-[80%]'>{items.description}</p>
   <div className="h-[254px] w-[481px] rounded-[24px] m-auto relative overflow-hidden bg-cover bg-center">
        <img
          src={items.img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
    </div>
  )
}

export default SecondSection