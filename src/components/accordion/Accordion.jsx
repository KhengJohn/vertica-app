import React, { useState } from "react";

const Accordion = ({ title, content, isOpen, onToggle }) => {
    return (
      <div className="bg-[#F5F5F5] rounded-lg">
        <button
          onClick={onToggle}
          className="flex justify-between items-center w-full px-4 py-3 text-left focus:outline-none"
        >
          <span className="text-lg font-bold">{title}</span>
          <span>{isOpen ? '−' : '+'}</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <div className="p-4 text-gray-700">
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  };

export default Accordion;
