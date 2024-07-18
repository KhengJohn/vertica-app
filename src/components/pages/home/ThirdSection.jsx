import React, {useState} from "react";
import Accordion from "../../accordion/Accordion";

const accordionData = [
  {
    title: "Courage (Akinkanju/Igboya)",
    content: "A home that inspires you to face life's challenges",
  },
  {
    title: "Intelligence (Opolo-Pipe)",
    content: "Content for the second accordion item.",
  },
  {
    title: "Good health (Ire-aiku)",
    content: "Content for the third accordion item.",
  },
  {
    title: "Prosperity (Ire-Owo)",
    content: "Content for the third accordion item.",
  },
  {
    title: "Family values (Ire-Omo)",
    content: "Content for the third accordion item.",
  },
  {
    title: "Harmony (Ire-T'oko-t'aya)",
    content: "Content for the third accordion item.",
  },
  {
    title: "Harmony Resilience (Ire abori-ota)",
    content: "Content for the third accordion item.",
  },
];
const ThirdSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-10 lg:px-32 py-12">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-[28px] text-center lg:text-left font-bold text-[#0F0F0F]">
          The Omoluabi Way of Living
        </h2>
        <p className="text-[18px] text-center lg:text-left leading-[26px] text-[#404040] w-[85%]">
          Vertica Tiny-HousE is built on the foundational values of the Omoluabi
          – the essence of good character and societal values in Yoruba culture,
          offering a unique cultural export that all Nigerians can proudly share
          with the world:
        </p>
        <div className="lg:w-[400px] h-[300px]">
          <img className="w-full h-[full]" src="/assets/images/ts.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full">
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
