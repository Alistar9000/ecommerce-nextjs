'use client'

import Link from 'next/link'
import React, { ElementRef, useEffect, useRef, useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Searchbar from './Searchbar'
import NavIcons from './NavIcons'

const Header = () => {

useEffect(() => {
  document.body.scrollTop = 300
  console.log('body-scrolltop: ', document.body.scrollTop)
}, [])


  return (
    <div  className={`${document.body.scrollTop < 300 ? 'h-[168px]' : 'h-[150px]'} transition-all duration-300 z-20 fixed top-0 right-0 left-0 bg-white px-4 border-b-2`}>
      {/* MOBILE SCREEN */}
       <div className="flex md:hidden justify-between items-center h-full">
        <Link href={'/'}>
        <div className="text-2xl tracking-wide">
        Ali E-Commerce
        </div>
        </Link>
        <Menu />
       </div>
        {/* BIGGER SCREEN */}
        <div className="hidden md:flex justify-between items-center h-full gap-8">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex justify-center items-center gap-12">
        <Link href={'/'} className='flex gap-3 items-center'>
        <Image alt='logo' src={'/logo.png'} width={24} height={24} />
        <div className="text-2xl tracking-wide">
        Commerce
        </div>
        </Link>
        <div className="hidden xl:flex gap-4">
        <Link href={'/'}>Homepage</Link>
        <Link href={'/'}>Shop</Link>
        <Link href={'/'}>Deals</Link>
        <Link href={'/'}>About</Link>
        <Link href={'/'}>Contact</Link>
        </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 h-full flex gap-8 items-center justify-between">
        <Searchbar />
        <NavIcons />
        </div>
        </div>
    </div>
  )
}

export default Header