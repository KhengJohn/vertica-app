import React, {useState} from "react"; 
import AccordionII from "../../accordion/Accordion2";

const accordionData = [
  {
    title: "How big is the Vertica Tiny-HousE?",
    content: "Our efficient 2-bedroom design maximizes every square meter, providing ample space for various life stages without unnecessary excess. It's the perfect balance of comfort and functionality.",
  },
  {
    title: "Can I customize my Vertica Tiny-HousE?",
    content: "Content for the second accordion item.",
  },
  {
    title: " How does the income-generating potential work?",
    content: "Content for the third accordion item.",
  },
  {
    title: "Is Vertica Tiny-HousE only for Yorubas or Nigerians?",
    content: "Content for the third accordion item.",
  },
];
const SeventhSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
<div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-10 lg:px-32 py-20">
      <div className="w-full flex flex-col gap-5 self-start">
        <h2 className="text-[28px] font-bold text-[#0F0F0F]">
        Your Questions, Answered
        </h2>
        <p className="text-[18px] leading-[26px] text-[#404040] w-[85%]">
        Vertica Tiny-HousE is built on the foundational values of the Omoluabi – the essence of good character and societal 
        </p> 
      </div>
      <div className="flex flex-col gap-5 w-full">
        {accordionData.map((item, index) => (
          <AccordionII
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default SeventhSection