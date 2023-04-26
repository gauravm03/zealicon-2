import React, { useState } from 'react'
import Card from './Card'
import { FaChevronCircleLeft,FaChevronCircleRight } from 'react-icons/fa';

const Testimonial = (props) => {
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);

    function lefttShift(){
        if(index-1<0)
        {
            setIndex(reviews.length-1);
        }
        else
        {
            setIndex(index-1);
        }
    }
    
    function rightShift(){
        if(index+1>=reviews.length)
        {
            setIndex(0);
        }
        else
        {
            setIndex(index+1);
        }
    }
    
    function random()
    {
        let i=Math.floor(Math.random()+reviews.length);
        setIndex(i);
    }
    


  return (
    <div className='max-w-[1000px] bg-white mx-auto'>
     <Card review={reviews[index]}></Card>
    
        <div className='items-center justify-center mb-10 flex text-3xl mt-5 gap-3 text-violet-400 font-bold'>
            <button className='hover:text-violet-500'>
            <FaChevronCircleLeft onClick={lefttShift}/>
            </button>
            <button className='hover:text-violet-500'>
             <FaChevronCircleRight onClick={rightShift}/>
            </button>
        </div>
        <div className='pb-8'>
            <button onClick={random} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonial