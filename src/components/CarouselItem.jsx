import React from "react";

const CarouselItem = ({ item, width }) => {
  return (
    <div
      className="inline-flex items-center justify-center h-[75vh] bg-transparent"
      style={{ width: width }}
    >
      <div className="flex flex-col">
        <img
          alt={item.description}
          className="h-[500px] w-full"
          src={item.icon.default}
        />
        <p className=" font-semibold text-xl text-black w-32">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
