import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[100%] h-[80px] bg-gray-500 p-5'>
        <Link href={"/signin"} className="text-2xl p-5 hover:text-yellow-400">SIGN IN</Link>
        <Link href={"/signup"} className="text-2xl p-5 hover:text-yellow-400">SIGN UP</Link>
    </div>
  )
}

export default Navbar