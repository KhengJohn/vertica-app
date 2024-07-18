import React from "react";
import { Link } from "react-router-dom";
const NinthSection = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-10 px-10 lg:px-32 py-16 bg-[#1C1C84]">
      <h2 className="text-[28px] font-bold text-[#FFF]">
        Ready to Embrace the Omoluabi Lifestyle?
      </h2>
      <p className="text-[18px] leading-[26px] text-[#FFF] lg:w-[70%]">
        Join the waiting list now and be the first to know about pre-order
        opportunities, exclusive events, and special offers. Your journey
        towards a life of purpose, growth, and success – inspired by Yoruba
        wisdom – starts with Vertica Tiny-HousE.
      </p>
      <Link to="/join-waitlist"> 
        <button className="mt-[20px] h-[56px] md:w-[450px] px-5 lg:text-[24px] bg-[#FFF] text-[#1C1C84] rounded">
          Pre-Order Your Vertica Tiny-House
        </button>
      </Link>
    </div>
  );
};

export default NinthSection;
