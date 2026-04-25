'use client'

import { ReactElement, ReactHTML, ReactHTMLElement, ReactNode, useState } from "react"

export default  function SlugPage({params,searchParams}:{params:{slug:string},searchParams:{name:string}}) {
    const {slug} = params
    const {name} = searchParams
    const [searchInput,setSearchInput] = useState('')
    const [check,setCheck] = useState('')
    const searchResults_name : Items[]  = items.filter(e=>e.name.toLowerCase().includes(searchInput.toLowerCase()))
    const searchResults_id : Items[]  = items.filter(e=>searchInput ? e.id === Number(searchInput) : e)
    const handleCheckbox = (e:any) =>{
       setCheck(e.target.name)
    }
   return <div className=" flex flex-col gap-3 h-[calc(100vh-170px)]">slug page {slug} {name}
   
   <input onChange={(e)=> setSearchInput(e.target.value)} type="text" className="w-1/4 rounded-xl outline-none border-2 border-slate-300 py-2 px-4" />
   <div className="flex gap-3 items-center">
    <label htmlFor="id_chckbox">id</label>
    <input type="checkbox"  checked={'id_chckbox' === check} onChange={handleCheckbox} name="id_chckbox" id="" />
    <label htmlFor="name_chckbox">name</label>
    <input type="checkbox" checked={'name_chckbox' === check} onChange={handleCheckbox} name="name_chckbox" id="" />
   </div>
   {check === 'id_chckbox' ? searchResults_id.map(e=><p key={e.id}>{e.id} {e.name}</p>): searchResults_name.map(e=><p key={e.id}>{e.id} {e.name}</p>)}
   </div>
} 
type Items = {
    id:number,
    name:string,
}
const items:Items[] = [
    {
        id:1,
        name:'ali'
    },
    {
        id:2,
        name:'karim'
    },
    {
        id:3,
        name:'sara'
    }
]
