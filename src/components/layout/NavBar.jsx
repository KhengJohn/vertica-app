import React, {useState} from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between px-16 py-5">
      <div>
        <img
          className="h-[38px] w-[90px]"
          src="/assets/images/logo.png"
          alt=""
        />
      </div>
      <div className="hidden md:flex items-center gap-[100px]">
        <div className="flex gap-[50px] text-[#404040]">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Features</span>
          <span className="cursor-pointer">Benefits</span>
          <span className="cursor-pointer">FAQ</span>
          <span className="cursor-pointer">Contact</span>
        </div>
        <button className="h-[55px] w-[200px] bg-[#1C1C84] text-white rounded-[8px] font-medium">
          Join the waitlist
        </button>
      </div>
      <div className="flex md:hidden items-center">
        <button
          className="text-[#404040] focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white md:hidden`}
      >
        <div className="flex flex-col items-center gap-5 py-5 text-[#404040]">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Features</span>
          <span className="cursor-pointer">Benefits</span>
          <span className="cursor-pointer">FAQ</span>
          <span className="cursor-pointer">Contact</span>
          <button className="h-[55px] w-[200px] bg-[#1C1C84] text-white rounded-[8px] font-medium">
            Join the waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
