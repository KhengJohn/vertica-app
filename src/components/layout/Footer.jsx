import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between gap-20 px-10 lg:px-32 py-16">
      <div className="lg:w-[20%] flex flex-col gap-[30px]">
        <img
          className="h-[48px] w-[110px]"
          src="/assets/images/logo.png"
          alt=""
        />
        <p className="text-[#737373]">
          Designed for the driven and ambitious, from young professionals to
          growing families and wise retirees
        </p>
        <div className="flex gap-[10px]">
          <img
            className="cursor-pointer"
            src="/assets/images/bi_facebook.png"
            alt="FB icon"
          />
          <img
            className="cursor-pointer"
            src="/assets/images/fa6-brands_x-twitter.png"
            alt="X icon"
          />
          <img
            className="cursor-pointer"
            src="/assets/images/teenyicons_instagram-solid.png"
            alt="IG icon"
          />
        </div>
      </div>
      <div className="lg:w-[70%] flex flex-col lg:flex-row justify-between gap-20">
        <div className="flex flex-col gap-3">
          <span className="text-[#404040] font-bold">Contact Information</span>
          <ul className="text-[#737373] flex flex-col gap-5">
            <li className="cursor-pointer">No 40, Ahmodu bello way, Lagos State.</li>
            <li className="cursor-pointer">08089720812734</li>
            <li className="cursor-pointer">omoluabi@gmail.com</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[#404040] font-bold">Privacy Policy</span>
          <ul className="text-[#737373] flex flex-col gap-5">
            <li className="cursor-pointer">Privacy Policy</li> 
          </ul>
        </div>
     
      <div className="flex flex-col gap-3">
          <span className="text-[#404040] font-bold">Terms of Service</span>
          <ul className="text-[#737373] flex flex-col gap-5">
            <li className="cursor-pointer">Terms of use</li> 
          </ul>
        </div> </div>
    </div>
  );
};

export default Footer;
