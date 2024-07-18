import React from "react";
import { Link } from "react-router-dom";
const FourthData = [
  {
    head: "For Diaspora",
    title: "Your Cultural Anchor Abroad",
    description:
      "Stay connected to your roots while building your future. Vertica Tiny-HousE is your slice of Nigeria, wherever you are in the world.",
    link: "",
  },
  {
    head: "For Parents",
    title: "Perfect Gift for Your Child's Future",
    description:
      "Set your children up for success with a gift that appreciates in value and character. Give them more than a house give them a foundation for life.",
    link: "",
  },
  {
    head: "For Investors",
    title: "A Secure, High-Yield Asset",
    description:
      "Diversify your portfolio with a property that offers both steady rental income and long-term. Smart investment meets smart living.",
    link: "",
  },
  {
    head: "For Retirees",
    title: "Your Comfortable, Supportive Haven",
    description:
      "Downsize without compromise. Enjoy a low-maintenance, high-comfort lifestyle that keeps you connected to your community.",
    link: "",
  },
];

const FourthSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[16px] px-10 lg:px-32 py-12">
      <h2 className="text-[28px] font-bold">Our Target Audience</h2>
      <span className="text-[18px] text-[#404040] lg:w-[60%] text-center">
        Vertica Tiny-HousE is built on the foundational values of the Omoluabi –
        the essence of good character and societal values in Yoruba culture.
      </span>
      <div className="grid lg:grid-cols-2 gap-[32px] mt-[20px]">
      {FourthData.map(items => (<div className="border-[#A3A3A3] border rounded-[20px] p-[24px] flex flex-col gap-[10px]">
        <span className="text-[#A3A3A3]">{items.head}</span>
        <div><h3 className="text-[#0F0F0F] text-[20px] font-semibold">{items.title}</h3>
        <p className="text-[#404040] mt-2 text-[14px]">{items.description}</p></div>
        <Link to="/join-waitlist"> <span className="text-[#1C1C84] text-[14px] mt-3 cursor-pointer">Join the waitlist</span></Link>
      </div>))}</div>
    </div>
  );
};

export default FourthSection;
