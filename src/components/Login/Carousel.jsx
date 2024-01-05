import React, { useState, useEffect } from "react";
import Header from "../Header";
import CarouselItem from "../CarouselItem";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      description: "Manage Sales, Inventory and other transactions.",
      icon: require("../../img/analysis-flatline.svg"),
    },
    {
      description: "Manage Sales, Inventory and other transactions.",
      icon: require("../../img/brainstorming-two-color.svg"),
    },
    {
      description: "Manage Sales, Inventory and other transactions.",
      icon: require("../../img/team-presentation.svg"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const autoSlide = () => {
    const newIndex = (activeIndex + 1) % items.length;
    updateIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(autoSlide, 5000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <div className="w-full h-full p-4 bg-gray-100">
      <Header />
      <div className="flex items-center justify-center">
        <div className="overflow-hidden w-full flex flex-col justify-center carousel">
          <div
            className="whitespace-nowrap transition-transform duration-300"
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            {items.map((item) => (
              <CarouselItem item={item} key={item.icon} width={"100%"} />
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={index}
                className={`indicator-buttons ${
                  index === activeIndex ? "active-indicator" : ""
                }`}
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <button
                  className={`rounded-full focus:outline-none ${
                    index === activeIndex
                      ? "w-16 h-3 bg-[#FAD44F]"
                      : "w-3 h-3 bg-gray-200"
                  }`}
                ></button>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
