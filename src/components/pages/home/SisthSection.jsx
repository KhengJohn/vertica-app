import React from "react";

const SisthSection = () => {
  return (
    <div className="flex flex-col items-center gap-[16px] px-10 lg:px-32 py-16 lg:h-screen">
      <h2 className="text-[28px] font-bold">Hear It Straight From Our Users</h2>
      <span className="text-[18px] text-[#404040] lg:w-[80%] text-center">
        Vertica Tiny-HousE is built on the foundational values of the Omoluabi –
        the essence of good character and societal values in Yoruba culture,
        offering a unique cultural export that all Nigerians.
      </span>
      <div className="grid lg:grid-cols-2 gap-[32px] mt-[30px]">
        <div className="w-[100%] lg:h-[328px]">
          <img className="w-full h-[full]" src="/assets/images/sixthimg.png" alt="" />
        </div>
        <div className="flex flex-col items-center gap-7 lg:w-[80%]">
          <p className="text-[18px] leading-[26px] text-[#000]">
            "Vertica Tiny-HousE is not just a smart investment, it's a smart way
            of living. It's everything I need, nothing I don't, and all that I
            aspire to be as an Omoluabi."
          </p>{" "}
          <h2 className="text-[24px] font-bold text-[#000]">
            Oluwaseun A., Tech Entrepreneur
          </h2>
          <div className="flex gap-8 mx-auto">
            <img className="bg-[#FFF] p-2 rounded-[100%] cursor-pointer" src="/assets/images/bi_arrow-up.png" alt="" srcset="" />
            <img className="bg-[#1C1C84] p-2 rounded-[100%] cursor-pointer" src="/assets/images/bi_arrow-upwhite.png" alt="" srcset="" /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SisthSection;
