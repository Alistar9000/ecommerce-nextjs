import Image from "next/image";
import { afterSliderItems, AfterSliderItems } from "./AfterSlider";
import Link from "next/link";

type AfterSliderServices = {
    id:number,
    title:string,
    img:string,
    content?:string
}
export default function AfterSliderModal({showModal,setShowModal}:{showModal:boolean,setShowModal:(param:boolean)=>void}){
    const afterItems = [...afterSliderItems].filter(e=> e.id !== 10 && e.id!==2 && e.id!==3) 
    console.log('afterItems: ',afterItems)
    const items = [
         ...afterItems,
          {
              id:10,
              img:'/after-slider/after-slider-electrical-charging.png',
              caption:<span >برقی ولی <br className="hidden lg:block"></br>شارژی</span>
          },
          {
              id:2,
              img:'/after-slider/after-slider-gold-off.png',
              caption:<span >تخفیف <br className="hidden lg:block"></br>طلاوشمش</span>
          },
          {
              id:3,
              img:'/after-slider/after-slider-light-economy.png',
              caption:<span >اقتصادهای <br className="hidden lg:block"></br>روشنایی</span>
          },
          {
              id:11,
              img:'/after-slider/after-slider-buy.png',
              caption:<span >خرید حضوری <br className="hidden lg:block"></br>از دیجی کالا</span>
          },
          {
              id:12,
              img:'/after-slider/after-slider-supermarket.png',
              caption:"سوپرمارکت"
          },
          {
              id:13,
              img:'/after-slider/after-slider-digi-club.png',
              caption:"دیجی کلاب"
          },
        ]

     const servicesItems:AfterSliderServices[] = [
        {
            id:1,
            title:'طلای دیجیتال',
            img:'/after-slider/after-slider-digital-gold.png',
        },
        {
            id:2,
            title:'پلاس',
            img:'/after-slider/after-slider-plus.png',
            content:'خریدی سریع تر، راحت تر و ارزان تر از دیجی کالا'
        },
        {
            id:3,
            title:'خرید قسطی',
            img:'/after-slider/after-slider-ghesti-buy.png',
            content:'خرید قسطی گوشی موبایل، لپ تاپ، طلا و لوازم خانگی'
        },
        {
            id:4,
            title:'دیجی کالا مهر',
            img:'/after-slider/after-slider-digikala-mehr.png',
            content:'همه چیز برای این روزا'
        },
        {
            id:5,
            title:'همکاری در فروش دیجی کالا',
            img:'/after-slider/after-slider-digikala-sell.png',
            content:'کسب درآمد از همکاری در فروش محصولات دیجی کالا از طریق تولید محتوا'
        },
        {
            id:6,
            title:'دیجی کالا بیزینس',
            img:'/after-slider/after-slider-digikala-bussiness.png',
            content:'پلتفرم اختصاصی فروش عمده موبایل و کالای دیجیتال'
        },
        {
            id:7,
            title:'پیندو',
            img:'/after-slider/after-slider-pindo.png',
            content:'ثبت آگهی برای کالا و خدمات'
        },
        {
            id:8,
            title:'بومی محلی',
            img:'/after-slider/after-slider-boomi-mahali.png',
            content:'محصولات بومی و محلی با هدف توانمندسازی کسب وکارهای خرد شهری و روستایی در خانواده دیجی کالا ایجاد شده و میزبان محصولات اصیل و متفاوتی از چهارگوشه ایران است.'
        },
        {
            id:9,
            title:'دیجی کالا سرویس',
            img:'/after-slider/after-slider-digikala-service.png',
            content:'گارانتی و خدمات پس از فروش دیجی کالا'
        },
        {
            id:10,
            title:'فیدیبو',
            img:'/after-slider/after-slider-fidibo.png',
            content:'خرید کتاب و دانلود کتاب الکترونیک'
        },
     ]   
 console.log('items: ',items)
  return  <div onClick={()=>setShowModal(false)} className={`fixed inset-0 bg-black/20 flex ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none '} z-50 transition-opacity duration-500 justify-center items-center`}>
         <div onClick={(e)=>e.stopPropagation()} className={`lg:h-[calc(100vh-140px)] ${showModal ? 'translate-y-0 ' : 'translate-y-full'} transform overflow-hidden transition lg:transition-none duration-500 h-full  lg:w-1/2 w-full bg-white  rounded-2xl border border-neutral-200`}>
           
           
                <div className="flex p-4  border-b-[1.6px] border-neutral-200/50 pb-4 items-center justify-between">
                    <p className="text-md font-bold text-neutral-900">خدمات دیجی کالا</p>
                    <Image className="cursor-pointer" onClick={()=>setShowModal(false)} alt="" src='/x.png' width={12} height={10} sizes="100%" />
                </div>
            <div className="overflow-auto p-2 pb-4  lg:h-[calc(100vh-198px)] h-[calc(100vh-70px)]">
                <div className="py-8 overflow-auto  px-2 grid justify-center grid-cols-3 lg:grid-cols-6 w-full  gap-x-10 gap-y-7 lg:gap-y-3 ">
                    {
                        items.map(item=>(
                            <Link key={item.id} href={'/'}  className="   h-max  place-items-center">
                            <div className="w-[3.3rem] h-[3.3rem] relative ">
                            <Image  alt="" className="object-cover cursor-pointer" src={item.img || ''} fill sizes="100%"  />
                            </div>
                        <p style={{lineHeight:'25px'}} className="w-full  font-bold text-[.7rem]  cursor-pointer text-center">{item.caption}</p>
                        </Link>
                        ))
                    }
                </div>
                <h1 className="text-md px-4 text-neutral-600 font-bold">سرویس های گروه دیجی کالا</h1>
                <div className="grid   px-4 mt-4 grid-cols-1 lg:grid-cols-2 lg:gap-4">
                    {servicesItems.map(item=>(
                        <Link href={'/'} target="_blank" key={item.id} className="flex lg:border border-b last:border-b-0 lg:rounded-xl px-0 py-4 lg:px-4   gap-2">
                            <div className="w-[3.5rem] h-[3.5rem] relative">
                            <Image src={item.img} alt="" fill className="object-cover" sizes="100%"  />
                            </div>
                            <div className="flex flex-1 flex-col gap-2">
                                <div className="flex justify-between  items-center">
                                <p className="text-neutral-500 text-sm font-bold">{item.title}</p>
                                <span className="text-neutral-400/60 float-end
                            "> برو </span>
                                </div>
                                <p className="text-neutral-400/80 font-bold text-[.65rem]">{item.content}</p>
                            </div>
                        
                        </Link>
                    ))}
                </div>
           </div>

         </div> 
    </div>
}