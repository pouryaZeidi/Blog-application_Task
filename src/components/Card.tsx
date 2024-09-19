import { cardprops } from '@/types/type'
import Link from 'next/link'
import React from 'react'

const Card = ({txt, src, des}: cardprops) => {
  return (
    <Link className='w-[300px] h-[450px] flex flex-col p-5 border-black border rounded-lg' href={'/1'}>
      <h1 className='font-bold text-2xl m-5'>{txt}</h1>
      <div>
        <img src={src} alt="{image}" className='w-[250px] h-[250px] m-2 rounded-lg'/>
      </div>
      <h2 className='text-xl font-semibold line-clamp-2'>
        {des}
      </h2>
    </Link>
  )
}

export default Card
