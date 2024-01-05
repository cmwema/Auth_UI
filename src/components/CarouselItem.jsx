import React from 'react'

export const CarouselItem = ({ item, width }) => {
  return (
    <div
      className="inline-flex items-center justify-center h-[75vh] bg-transparent"
      style={{ width: width }}
    >
      <div className='flex flex-col'>
        <img alt={item.description} className="h-[500px]" src={item.icon.default} />
        <div className="font-semibold text-2xl text-black w-14">{item.description}</div>
      </div>
    </div>
  );
};

export default CarouselItem