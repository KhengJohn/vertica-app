import React from "react";

const fifthData = [
  " VIP invitations to expert-led webinars and information sessions",
  " Substantial early-bird discount on your purchase",
  " Priority delivery – be the first to move in",
  " Complimentary smart home setup and personalisation",
  " Lifetime access to Vertica community events and resources",
];
const FifthSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-10 lg:px-32 py-12 lg:h-screen bg-[#1C1C84]">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-[28px] font-bold text-[#FFF]">
          Be Among the First to Own a Piece of the Future
        </h2>
        <p className="text-[18px] leading-[26px] text-[#FFF] w-[85%]">
          Be Among the First to Own a Piece of the Future. Preorder your Vertica
          Tiny-House today and unlock exclusive benefits. Don't watch the future
          unfold be part of it. Pre-order now and step into your new life
        </p>
        <div className="lg:w-[400px] h-[300px]">
          <img className="w-full h-[full]" src="/assets/images/ts.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-7 w-full">
        {fifthData.map((item, index) => (
          <div className="flex w-full items-center gap-4 ">
            <span className="flex justify-center text-[20px] items-center w-[54px] h-[54px] rounded-[100%] bg-white font-semibold text-[#1C1C84]">{index + 1}</span>
            <span className=" w-[80%] text-[20px] font-semibold text-white">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FifthSection;
