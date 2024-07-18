import React, { useState } from "react";
import { Link } from "react-router-dom";
import { countries } from "../../../bommon/data/Data";
const Waitlist = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div className="flex flex-col text-center justify-center items-center gap-5 px-10 lg:px-32 lg:py-5 py-10">
      <h2 className="text-[28px] font-bold text-[#0F0F0F]">
        Vertica Tiny-House Is Launching Soon
      </h2>
      <p className="text-[18px] leading-[26px] text-[#404040] lg:w-[70%]">
        Join the and be a part of a movement that celebrates our rich cultural
        heritage while creating opportunities for personal and financial growth.
        Don't miss out on this. Fill out the form now and be the first to
        experience a new way of living in Nigeria.
      </p>
      <form className="lg:w-[80%] flex flex-col gap-10 mt-5">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="flex flex-col items-start">
            <label
              htmlFor="inputName"
              className="mb-2 text-lg font-medium text-[#404040]"
            >
              Name
            </label>
            <input
              type="text"
              id="inputName"
              placeholder="Enter name"
              className="w-full h-[56] px-4 py-2 border border-[#A3A3A3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1C84]"
            />
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="inputEmail"
              className="mb-2 text-lg font-medium text-[#404040]"
            >
              Email
            </label>
            <input
              type="email"
              id="inputEmail"
              placeholder="Enter email"
              className="w-full h-[56] px-4 py-2 border border-[#A3A3A3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1C84]"
            />
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="input"
              className="mb-2 text-lg font-medium text-[#404040]"
            >
              Location(Country)
            </label>
            <select
              id="country"
              value={selectedCountry}
              onChange={handleChange}
              className="w-full h-[56] px-4 py-2 border border-[#A3A3A3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1C84]"
            >
              <option value="" disabled>
                Select a country...
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="input"
              className="mb-2 text-lg font-medium text-[#404040]"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="inputPhoneNumber"
              placeholder="Enter phone number"
              className="w-full h-[56] px-4 py-2 border border-[#A3A3A3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1C84]"
            />
          </div>
        </div>
        <Link to="/success">
          {" "}
          <button className="mt-[10px] h-[56px] w-[100%] px-5 lg:text-[20px] bg-[#1C1C84] text-[#FFF] rounded">
            Pre-Order Your Vertica Tiny-House
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Waitlist;
