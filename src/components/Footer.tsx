import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-200  mt-24 h-96 py-24 flex px-4 md:px-8 lg:px-16 xl:px-32'>
      {/* LEFT */}
      <div className="flex-[2] sm:w-full bg-amber-200 flex flex-col gap-8">
        <h1 className='font-semibold text-2xl '>Ali</h1>
        <p>Tehran, Valiasr sqr,Valiasr ave,Iran</p>
        <p className='text-sm font-semibold'>mosadegh07@gmail.com</p>
        <p>+989375574102</p>
      </div>
     {/* CENTER */}
      <div className="flex-[3] sm:w-full bg-fuchsia-300"></div>
     {/* RIGHT */}
      <div className="flex-[2] sm:w-full bg-red-500"></div>
    </div>
  )
}

export default Footer