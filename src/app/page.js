'use client'
import React from 'react'
import CreateSection from '@/Components/SignUpSection/CreateSection'
import { BsChatFill } from "react-icons/bs";


const page = () => {
  return (
    <section id='move'>

      <CreateSection/>

      <a href=''>
        <p className='pointer rounded-full'><BsChatFill/></p>
      </a>

  </section>
  )
}

export default page