import React from 'react'
import style from '@/styles/Layout.module.css'

import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

const Layout = ({children}:any) =>{
  return (
    <div>
        <div >
            <Navbar/>
        </div>
        <div>{children}</div>
    </div>
  )
}

export default Layout