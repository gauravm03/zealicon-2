import React from 'react'
import "./Home.css"
const Home = () => {
    var val = Math.floor(1000 + Math.random() * 9000);
  return (
    <div className='wrapper'>
        <div className=' w-10/12 mb-12 flex flex-col gap-6 mx-auto pt-10 md:my-2'>
          <div className="text-yellow-400 text-3xl font-bold">Entry Pass</div>
          <div className='text-white  flex flex-col justify-center gap-5 items-center mx-auto'>
               <input className='wrapper w-[400px] pt-2 pb-2 pl-1 pr-1 font-semibold text-3xl bg-opacity-10 text-white text-center' type='text'/> 
              <div className="text-white text-2xl  ">Zeal-ID-{val}</div>
          </div>
        </div>
        <div className='w-10/12  flex flex-col gap-[4.5rem] mx-auto  pt-10 md:my-2'>
          <div className="text-yellow-400 text-3xl font-bold">ID Card</div>
          <div className='text-white flex flex-col justify-center gap-5 items-center mx-auto'>
           <img src="" width="" className='mb-48' alt='id'/>
          </div>
        </div>
    </div>
  )
}

export default Home


// <div class="flex w-full justify-center mt-4 mb-12 md:justify-end md:my-2"><button class="text-white bg-landingPink rounded-md px-[2.5rem] py-2.5">Logout</button></div>