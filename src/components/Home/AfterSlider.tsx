'use client'

import Image from "next/image"
import Link from "next/link"
import { ReactElement, useState } from "react"
import AfterSliderModal from "./AfterSliderModal"
import { it } from "node:test"

export type AfterSliderItems = {
    id:number,
    img?:string | null,
    caption: ReactElement | string
}

export const afterSliderItems:AfterSliderItems[] = [
        {
            id:1,
            img:'/after-slider/after-slider-food.png',
            caption:<span>ارسال فوری <br className="hidden md:block"></br>خواربار</span>
        },
        {
            id:2,
            img:'/after-slider/after-slider-digital-gold.png',
            caption:<span>طلای <br className="hidden md:block"></br>دیجیتال</span>
        },
        {
            id:3,
            img:'/after-slider/after-slider-plus.png',
            caption:'پلاس'
        },
        {
            id:4,
            img:'/after-slider/after-slider-digipay-loan.png',
            caption:<span>وام بانکی <br className="hidden md:block"></br>دیجی پی</span>
        },
        {
            id:5,
            img:'/after-slider/after-slider-electrical.png',
            caption:<span>برقی <br className="hidden md:block"></br>اقتصادی</span>
        },
        {
            id:6,
            img:'/after-slider/after-slider-best-laptops.png',
            caption:<span>بهترین <br className="hidden md:block"></br>لپ تاپ ها</span>
        },
        {
            id:7,
            img:'/after-slider/after-slider-digital-clock.png',
            caption:<span>حراج <br className="hidden md:block"></br>ساعت هوشمند</span>
        },
        {
            id:8,
            img:'/after-slider/after-slider-seller.png',
            caption:<span>فروشنده <br className="hidden md:block"></br>شوید</span>
        },
        {
            id:9,
            img:'/after-slider/after-slider-weekly-suggestion.png',
            caption:<span >پیشنهاد <br className="hidden md:block"></br>هفته</span>
        },
        {
            id:10,
            caption:'بیشتر'
        },
    ] 
export default function AfterSlider(){
    const [showModal,setShowModal] = useState(false)

   
    return <div className="">

     <div className="overflow-auto">

    
    <div  className=" lg:justify-center  justify-start mt-6 lg:px-24 px-5 flex   lg:gap-8 gap-5 ">
               {
                afterSliderItems.map(item => (
                    <Link  key={item.id} href={'/'} target={item.img ? '_blank' : ''} className={`lg:flex-1 ${!item.img && 'pl-4'}  h-max  place-items-center`}>
                        <div className={` w-[3.3rem] h-[3.3rem] relative`}>
                       {item.img ? <Image  alt="" className="object-cover cursor-pointer" src={item.img} fill sizes="100%"  />:
                         <div onClick={()=>setShowModal(true)} className="cursor-pointer rounded-full  gap-1 w-[3rem] h-[3rem] bg-slate-200 flex justify-center items-center">
                            <span className="h-[.4rem] w-[.4rem] bg-neutral-400 rounded-full"></span>
                            <span className="h-[.4rem] w-[.4rem] bg-neutral-400 rounded-full"></span>
                            <span className="h-[.4rem] w-[.4rem] bg-neutral-400 rounded-full"></span>
                         </div>
                       }
                        </div>
                       <p style={{lineHeight:'25px'}} className="w-full font-bold   text-[.7rem]  cursor-pointer text-center">{item.caption}</p>
                    </Link>
                ))
               }
        <AfterSliderModal showModal={showModal} setShowModal={setShowModal}/>

    </div>
     </div>
   </div>
}