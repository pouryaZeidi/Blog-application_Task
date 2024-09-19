import { useAppSelector } from '@/app/hook';
import { idprops } from '@/types/type';
import { useRouter } from 'next/router';
import React from 'react'

const id = ({title,src,desc}:idprops) => {
  const router = useRouter(); 
  const {auth} = useAppSelector(state=>state.user)

  // Function to handle navigation to the previous page
  const handleBackClick = () => {
    router.back(); // Navigate back to the previous page
  };
  return (
    <div>
        <button
          onClick={handleBackClick}
          className="mb-4 p-2 bg-gray-800 text-white rounded-2xl hover:bg-gray-700"  >
          Back
        </button>
        <h1 className='text-3xl font-bold'>{auth}</h1>
        <img src="{src}" alt="{img}" className='w-[250px] h-[450px]' />
        <h2 className='text-xl font-semibold'>{desc}</h2>
    </div>
  )
}

export default id