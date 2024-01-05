import React from 'react'

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className='w-full flex items-center justify-center'>
      <h1 className='font-medium text-gray-500'>
        <span>&copy; {date} <span>SmartPOS App</span></span>
      </h1>
    </div>
  )
}

export default Footer;