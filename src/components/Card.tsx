import { cardprops } from '@/types/type'
import React from 'react'

const Card = ({txt,src,des}:cardprops) => {
  return (
    <div className='w-[300px] h-[500px] flex flex-col p-5 border-black border rounded-lg  '>
        <h1 className='font-bold text-2xl m-5'>{txt}</h1>
        <div>
            <img src={src} alt="{image}"  className='w-[250px] h-[250px] m-2'/>
        </div>
        <h2 className='text-xl font-semibold'>{des}</h2>
    </div>
  )
}

export default Card