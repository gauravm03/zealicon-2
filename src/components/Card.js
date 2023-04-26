import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
const Card = (props) => {
   let review=props.review;

    return (
    <div className="md:relative flex flex-col ">
        <div className='absolute top-[-6rem] z-[10]'>
            <img alt={""} src={review.image} className="z-20 aspect-square rounded-full w-[140px] h-[140px] z"></img>
        </div>

        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>
        <div className='text-center  mt-7'>
            <p className='text-violet-300'>{review.job}</p>
        </div>
        <div className='mx-auto text-center text-violet-400 mt-5'>
            <FaQuoteLeft></FaQuoteLeft>
        </div>
        <div className='text-center mt-4 text-slate-400'>
            <p>{review.text}</p>
        </div>
        <div  className='mx-auto text-center text-violet-400 mt-5'>
            <FaQuoteRight></FaQuoteRight>
        </div>
    </div>
  )
}

export default Card