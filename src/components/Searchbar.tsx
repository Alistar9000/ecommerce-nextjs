'use client'

import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

const Searchbar = () => {

  const router = useRouter()
  const url = usePathname()
  const searchParams = useSearchParams()
  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get('search') as string  
    name && router.push(`/list?name=${name}`)
    // const urlSearchParams = new URLSearchParams(searchParams)
    // urlSearchParams.set('name',name)
    // name && replace(`${url}?${urlSearchParams}`)
  }

  return (
    <form onSubmit={handleSearch} className='h-10 flex-1 flex gap-4 justify-between bg-gray-100 p-2  rounded-md'>
     <input type="text" name="search" id="" placeholder='search...' className='flex-1 bg-transparent outline-none border-none' />
     <button className=''>
      <Image alt='' src={'/search.png'} width={16} height={16} />
     </button>
    </form>
  )
}

export default Searchbar