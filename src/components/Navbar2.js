import React from 'react'
import { FiAlignJustify } from "react-icons/fi";

const Navbar2 = () => {
  return (
    <div className='w-full bg-yellow-300 '>
      <div className='flex flex-row justify-between py-3 w-12/13 sm:py-1 px-10'>
          <img className='w-[120px]' alt='logo' src='https://zealicon.in/static/media/ZealiconLogo.9f97c6654d1906a1bd2e.png'/>
           <FiAlignJustify size={22} className='translate-y-5'/>
      </div>
    </div>
  )
}

export default Navbar2