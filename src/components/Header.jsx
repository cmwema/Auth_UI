import React from 'react'
import { RiPriceTagFill } from "react-icons/ri";


function Header() {
  return (
    <div className="w-full flex items-start justify-start p-4 mt-6">
      {/* logo */}
      <h1 className='flex gap-4 items-center'>
        <RiPriceTagFill className='text-red-900 text-xl'/>
        <span className='font-semibold text-2xl'>SmartPOS</span>
      </h1>
    </div>
  );
}

export default Header