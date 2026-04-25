import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const  CategoryList = () => {
  return (
    <div dir='rtl' className='mt-12 ml-8 overflow-x-scroll px-4 scrollbar-hide ' >
        <div className="flex  gap-4 md:gap-8">
     <Link  href={'/list?cat='} className='flex-shrink-0 w-full rounded-xl overflow-hidden rounded-xl overflow-hidden sm:w-1/2 lg:w-1/4 xl:w-1/6'>
     <div className="relative bg-slate-100  w-full rounded-xl overflow-hidden h-96">
        <Image alt='' src={'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'} fill className='object-cover' />
     </div>
     <h1 className='mt-8 tracking-wide text-xl'>Cat 1</h1>
     </Link>
     <Link href={'/list?cat='} className='flex-shrink-0 w-full rounded-xl overflow-hidden sm:w-1/2 lg:w-1/4 xl:w-1/6'>
     <div className="relative bg-slate-100 w-full rounded-xl overflow-hidden h-96">
        <Image alt='' src={'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'} fill className='object-cover' />
     </div>
     <h1 className='mt-8 tracking-wide text-xl'>Cat 1</h1>
     </Link>
     <Link href={'/list?cat='} className='flex-shrink-0 w-full rounded-xl overflow-hidden sm:w-1/2 lg:w-1/4 xl:w-1/6'>
     <div className="relative bg-slate-100 w-full rounded-xl overflow-hidden h-96">
        <Image alt='' src={'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'} fill className='object-cover' />
     </div>
     <h1 className='mt-8 tracking-wide text-xl'>Cat 1</h1>
     </Link>
     <Link href={'/list?cat='} className='flex-shrink-0 w-full rounded-xl overflow-hidden sm:w-1/2 lg:w-1/4 xl:w-1/6'>
     <div className="relative bg-slate-100 w-full rounded-xl overflow-hidden h-96">
        <Image alt='' src={'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'} fill className='object-cover' />
     </div>
     <h1 className='mt-8 tracking-wide text-xl'>Cat 1</h1>
     </Link>
     <Link href={'/list?cat='} className='flex-shrink-0 w-full rounded-xl overflow-hidden sm:w-1/2 lg:w-1/4 xl:w-1/6'>
     <div className="relative bg-slate-100 w-full rounded-xl overflow-hidden h-96">
        <Image alt='' src={'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'} fill className='object-cover' />
     </div>
     <h1 className='mt-8 tracking-wide text-xl'>Cat 1</h1>
     </Link>
     <Link href={'/list?cat='} className='flex-shrink-0 w-full rounded-xl overflow-hidden sm:w-1/2 lg:w-1/4 xl:w-1/6'>
     <div className="relative bg-slate-100 w-full rounded-xl overflow-hidden h-96">
        <Image alt='' src={'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'} fill className='object-cover' />
     </div>
     <h1 className='mt-8 tracking-wide text-xl'>Cat 1</h1>
     </Link>
     <Link href={'/list?cat='} className='flex-shrink-0 w-full rounded-xl overflow-hidden sm:w-1/2 lg:w-1/4 xl:w-1/6'>
     <div className="relative bg-slate-100 w-full rounded-xl overflow-hidden h-96">
        <Image alt='' src={'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'} fill className='object-cover' />
     </div>
     <h1 className='mt-8 tracking-wide text-xl'>Cat 1</h1>
     </Link>
     <Link href={'/list?cat='} className='flex-shrink-0 w-full  sm:w-1/2 lg:w-1/4 xl:w-1/6'>
     <div className="relative bg-slate-100 w-full rounded-xl overflow-hidden  h-96">
        <Image alt='' src={'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'} fill className='object-cover' />
     </div>
     <h1 className='mt-8 tracking-wide text-xl'>Cat 1</h1>
     </Link>
   
    </div>
    </div>
  )
}

export default  CategoryList