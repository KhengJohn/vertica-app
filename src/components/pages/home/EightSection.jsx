import React from 'react'

const EightSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-10 lg:px-32 py-20">
    <div className="w-full flex flex-col gap-7 self-start">
      <h2 className="text-[28px] font-bold text-[#0F0F0F]">
      Celebrating Nigeria's Rich Cultural Landscape
      </h2>
      <p className="text-[18px] leading-[26px] text-[#404040] lg:w-[85%]">
      Vertica Tiny-HousE, inspired by the Yoruba Omoluabi archetype, is just the beginning. We envision a future where Nigeria's diverse cultural heritage inspires innovative living solutions. As we pioneer with Yoruba wisdom, we look forward to exploring concepts drawn from Igbo, Hausa, and other Nigerian tribal values, contributing to our nation's global image as a wellspring of innovation and timeless wisdom
      </p> 
      <span className="text-[#1C1C84] text-[18px] mt-3 cursor-pointer">Learn More</span>
    </div>
    <div className="flex flex-col gap-5 w-full">
    <div className="w-[100%] h-full">
          <img className="w-full h-[full]" src="/assets/images/eightimg.png" alt="" />
        </div>
    </div>
  </div>
  )
}

export default EightSection