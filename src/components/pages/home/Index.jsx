import React from "react";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div>
      <div className="h-screen mt-10 lg:mt-0">
        <div className="flex flex-col justify-center items-center gap-[5px]">
          <h1 className="font-gilroy text-[35px] lg:text-[65px] text-center w-[81%] font-bold">
            Embrace the <span className="text-[#1C1C84]">Omoluàbí</span> Spirit
            – A Nigerian Innovation for the World
          </h1>
          <span className="lg:text-[24px] text-center w-[80%] font-">
            A revolutionary Nigerian housing solution that embodies the best of
            our national values rooted in the Yoruba Omoluabi philosophy. More
            than just a home, it's a launchpad for personal growth, cultural
            pride, and financial success
          </span>
        <Link to="/join-waitlist">  <button className="mt-[20px] h-[56px] w-[100%]  md:w-[450px] px-5 lg:text-[20px] bg-[#1C1C84] text-[#FFF] rounded">
            Pre-Order Your Vertica Tiny-House
          </button></Link>
        </div>
      </div>
      <div className="h-[353px] w-[80%] rounded-[24px] m-auto relative  overflow-hidden bg-cover bg-center">
        <img
          src="/assets/images/hero.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Index;
