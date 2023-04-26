import React from 'react'

const Footer = () => {
  return (
    <div className='w-full text-white bg-black '>
    <div className="footer flex flex-col md:flex-row px-4 md:px-16 py-12">
       <div className="info basis-1/4">
          <p className="text-brighterYellow text-3xl font-bold"> Zealicon 2023</p>
          <div className="itemsfooter flex flex-col text-white pt-6 md:pt-12">
              <ul className="list-none leading-10  md:text-xl font-normal text-lg">
                 <li className="cursor-pointer pb-1">Refund Policy</li>
                 <li className="cursor-pointer pb-1">Terms and Condition</li>
                 <li className="cursor-pointer pb-1">Privacy Policy</li
                 ><li className="cursor-pointer pb-1">Download App</li>
                 <li className="cursor-pointer pt-4"> Find us on</li>
               </ul>
             </div>
           </div>
           </div>
    </div>
  )
}

export default Footer