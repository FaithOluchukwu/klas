'use client'
import React from 'react'
import Image from 'next/image';
import Image1 from '../images/Create1.png'
import Image2 from '../images/Create2.png'
import Image3 from '../images/Create3.png'
import { IoIosArrowBack } from "react-icons/io";


const CreateSection = () => {
  return (
    <div>
      <div>
        <p className=' flex gap-1 items-center text-blue-600  px-10 py-10'><IoIosArrowBack />Back</p>
        <div className='flex flex-col justify-center items-center'> 
        <h1 className='text-4xl py-8 text-black font-bold'>What kind of content is it?</h1>
      <h7 className=' text-slate-400 mb-10'>Choose the type of content you would like to create</h7>
        </div>
           <div className=' flex justify-center  gap-10 py-10 pt-0'>
           <div className='p-6 shadow-md border-2 border-zinc-300 bg-white rounded-lg'>
              <div className=' mt-10 ml-16'><Image src={Image1} alt='' width={100}/></div>
              <h3 className='text-black ml-16'>Recorded courses</h3>
              <p className='text-slate-400 mb-8 ml-6'>Upload and sell your courses</p>
              <button className='bg-white hover:bg-blue-700 hover:text-white  ml-16 text-blue-600 py-2 px-10  text-bold rounded-lg border-2 border-blue-600'>Start</button>
            </div> 

            <div className='p-14 shadow-md border-2 border-zinc-300  bg-white rounded-lg'>
              <div className=' ml-10 '><Image src={Image2} alt='' width={125}/></div>
              <h3 className='text-black ml-20'>Ebooks</h3>
              <p className='text-slate-400 mb-8 ml-6 '>Sell interactive ebooks  </p>
              <button className='bg-white hover:bg-blue-700 hover:text-white  ml-10 text-blue-600  py-2 px-10   text-bold rounded-lg border-2 border-blue-600 '>Start</button>
            </div>  


            <div className='p-6 shadow-md border-2 border-zinc-300  bg-white rounded-lg'>
              <div className=' mt-10 ml-16'><Image src={Image3} alt='' width={100}/></div>
              <h3 className='text-black ml-16'> Live classes</h3>
              <p className='text-slate-400 mb-8 ml-6'>Host immersive & fun classes</p>
              <button className='bg-white  hover:bg-blue-700 hover:text-white   ml-16 text-blue-600  py-2 px-10  text-bold rounded-lg border-2 border-blue-600 '>Start</button>
            </div>

           </div>
           
      </div>
        
      

    </div>
  )
}

export default CreateSection
