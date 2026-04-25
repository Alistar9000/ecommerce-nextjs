"use client";

import Image from "next/image";
import React, {
  ElementRef,
  ReactElement,
  ReactHTMLElement,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { Calligraffitti, Scope_One } from "next/font/google";
import { setInterval } from "timers";
import { start } from "repl";
const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider01.webp",
    // img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider02.webp",
    // img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider03.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 4,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider04.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 5,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider05.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 6,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider06.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 7,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider07.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 8,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider08.gif",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 9,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider09.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 10,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider10.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 11,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider11.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];
const slides_mobile = [
  {
    id: 12,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider11.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider01.webp",
    // img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider02.webp",
    // img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider03.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 4,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider04.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 5,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider05.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 6,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider06.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 7,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider07.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 8,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider08.gif",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 9,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider09.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 10,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider10.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 11,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider11.webp",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 13,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider01.webp",
    // img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 14,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/slider/slider02.webp",
    // img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
];
type ref = ElementRef<"div">;

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<ref>(null);
  const scrollRefChild = useRef<ref>(null);

  useEffect(() => {
    const cardWidth = scrollRefChild.current
      ? scrollRefChild.current.offsetWidth
      : 0;
    const sideWidth = (window.innerWidth - cardWidth) / 2    
    const startPoint = -cardWidth + sideWidth ;

    if (scrollRef.current && scrollRefChild.current) {
      //  scrollRefChild.current.style.width = window.innerWidth+'px';
       scrollRef.current.scrollLeft = startPoint;
      }
    let i = 0;
    const interval = setInterval(() => {
      //  if(i === 1) return
      i++;
      console.log("i:", i);
      if (scrollRef.current) {
        // if(Math.abs(Math.ceil(scrollRef.current.scrollLeft)) !==
        if (
          scrollRef.current.scrollWidth +
            Math.ceil(scrollRef.current.scrollLeft) !==
          2 * cardWidth + sideWidth + 17
        ) {
          scrollRef.current.style.scrollBehavior = "smooth";
          // scrollRef.current.style.transition = "scroll 2s ease-in-out"
          scrollRef.current.scrollLeft += -cardWidth - sideWidth;
          console.log('diff: ',scrollRef.current.scrollWidth +
            Math.ceil(scrollRef.current.scrollLeft),'2card: ',2 * cardWidth + sideWidth + 16)
        } else {
          scrollRef.current.style.scrollBehavior = "";
          scrollRef.current.scrollLeft = startPoint;
        }
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((e) => (e === slides.length - 1 ? 0 : e + 1));
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [current]);

  return (
    <div className="relative w-full">
  
  
    <div className="overflow-auto hidden lg:block">    
      <div className="flex">
        {slides.map((item) => (
          <Link key={item.id} href={"/"} target="_blank">
            <div
              style={{ transform: `translateX(${current * 100}vw)` }}
              className="relative transition-all duration-300 h-[400px] w-screen "
            >
              <Image
                alt=""
                fill
                className="object-cover"
                src={item.img}
                sizes="100%"
              />
            </div>
          </Link>
        ))}
      </div>
      </div>

      {/* MOBILE SIZE*/}
 <div ref={scrollRef} className="overflow-hidden snap-x lg:hidden"> 
      <div  className="flex">
        {slides_mobile.map((item) => (
          
            <Link key={item.id} href={"/"} target="_blank" className="">
             <div className="w-[calc(100vw-36px)]  snap-center h-[160px] ml-2">

              <div ref={scrollRefChild} className="relative  overflow-hidden rounded-md w-full h-full  ">
                <Image
                  alt=""
                  fill
                  className="object-cover"
                  src={item.img}
                  sizes="100%"
                  />
                  </div>
              </div>
            </Link>
          
        ))}
      </div>
 </div>

      {/* DOTS */}
      <div className="lg:flex absolute bottom-4 hidden right-[33%] sm:right-[45%] gap-2">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(i)}
            className={`${current == i ? " w-3 scale-150 bg-white h-1 " : "w-1 h-1 bg-neutral-900/30"} ransition-all duration-200 flex-shrink-0 ease-in-out rounded-full  flex items-center justify-center`}
          >
            {/* {current == i && <div className="h-[9px] w-[9px] bg-gray-700 rounded-full"></div>} */}
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Slider;
