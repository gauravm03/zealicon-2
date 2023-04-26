import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-yellow-300'>
        <div className="flex flex-row bg-[#ffea6e] text-[#000000] px-6 py-2 md:inline-block w-full">
           <div className="flex flex-row justify-between w-full">
                 <div className="flex justify-center items-center">
                   <p></p>
                    <img src="https://zealicon.in/static/media/jss_logo-removebg-preview.f2b524e8caa353a6b433.png" width="40px" alt="jss-Logo"/>
                    <p className="font-semibold text-[8px] md:text-sm ml-1">JSS MAHAVIDHYAPEETHA<br/> JSS ACADEMY OF TECHNICAL EDUCATION, NOIDA</p>
                 </div>
                 <div className="flex justify-center items-center">
                 <img src="https://zealicon.in/static/media/G20.807ae00892a319606f30.png" className="max-w-[60px] min-w-[30px]" alt="g20-Logo"/>
            </div></div></div>
    </div>
  )
}

export default Navbar