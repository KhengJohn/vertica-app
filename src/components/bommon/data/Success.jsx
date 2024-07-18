import React from "react";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-7 px-10 lg:px-32 py-16">
        <img src="/assets/images/success.png" alt="SUCCESS" />
      <h2 className="text-[28px] font-bold text-[#0F0F0F]">
        Thank you for joining the waitlist for Vertica Tiny-House!
      </h2>
      <p className="text-[18px] leading-[26px] text-[#404040] lg:w-[70%]">
        You are now part of a community that values cultural pride, personal
        growth, and financial success. Stay tuned for exciting updates and be
        ready to embark on this revolutionary housing journey with us...
      </p>
      <form className="w-[80%] flex flex-col gap-10">
        <Link to="/">
          <button className="mt-[10px] h-[56px] w-[100%] text-[20px] bg-[#1C1C84] text-[#FFF] rounded">
            Continue To Home Page
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Success;
