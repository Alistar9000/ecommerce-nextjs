import Image from "next/image";
import { it } from "node:test";

type TopbarItems = {
  id: number;
  img: string;
  caption: string;
};
export default function Topbar({className}:{className:string}) {
  const slides: TopbarItems[] = [
    {
      id: 1,
      img: "/topbar/topbar-img01.jpg",
      caption: "تا قبد عید پوستتو نج...",
    },
    {
      id: 2,
      img: "/topbar/topbar-img02.jpg",
      caption: "پروژکتور انکر مدل A1...",
    },
    {
      id: 3,
      img: "/topbar/topbar-img03.jpg",
      caption: "منقل روزینکس",
    },
    {
      id: 4,
      img: "/topbar/topbar-img04.jpg",
      caption: "جارو شارژی ارزون!",
    },
    {
      id: 5,
      img: "/topbar/topbar-img05.jpg",
      caption: "کدوم هندزفری بهتره؟",
    },
    {
      id: 6,
      img: "/topbar/topbar-img06.jpg",
      caption: "مراحل پاک کردن آرایش",
    },
    {
      id: 7,
      img: "/topbar/topbar-img07.jpg",
      caption: "انواع منگنه کوب دستی",
    },
    {
      id: 8,
      img: "/topbar/topbar-img08.jpg",
      caption: "ساخت فلش انگشتی!",
    },
    {
      id: 9,
      img: "/topbar/topbar-img09.jpg",
      caption: "مقایسه ی نت باکس پرس",
    },
    {
      id: 1,
      img: "/topbar/topbar-img01.jpg",
      caption: "تا قبد عید پوستتو نج...",
    },
    {
      id: 2,
      img: "/topbar/topbar-img02.jpg",
      caption: "پروژکتور انکر مدل A1...",
    },
    {
      id: 3,
      img: "/topbar/topbar-img03.jpg",
      caption: "منقل روزینکس",
    },
    {
      id: 4,
      img: "/topbar/topbar-img04.jpg",
      caption: "جارو شارژی ارزون!",
    },
    {
      id: 5,
      img: "/topbar/topbar-img05.jpg",
      caption: "کدوم هندزفری بهتره؟",
    },
    {
      id: 6,
      img: "/topbar/topbar-img06.jpg",
      caption: "مراحل پاک کردن آرایش",
    },
    {
      id: 7,
      img: "/topbar/topbar-img07.jpg",
      caption: "انواع منگنه کوب دستی",
    },
    {
      id: 8,
      img: "/topbar/topbar-img08.jpg",
      caption: "ساخت فلش انگشتی!",
    },
    {
      id: 9,
      img: "/topbar/topbar-img09.jpg",
      caption: "مقایسه ی نت باکس پرس",
    },
  ];
  return (
    <div className={`w-full ${className} bg-white  max-w-[1336px] mt-4 lg:px-4 2xl:px-0 mx-auto`}>
      <div className="mx-auto w-full max-w-[1336px]">
        <div className="pt-4">
          <div className="touch-pan-y overflow-hidden">
            <div className="flex relative w-full h-full box-content">
              {slides.map((item) => (
                <div key={item.id} className="ml-6">
                  <div className="w-[84px] shrink-0">
                    <div className="bg-[linear-gradient(315deg,#e03d96,#7d4c9e)]  flex justify-center items-center  rounded-full  aspect-square">
                      <div className="w-[calc(100%-4px)] h-[calc(100%-4px)] bg-white flex justify-center items-center  rounded-full">
                        <div className="relative w-[calc(100%-6px)] h-[calc(100%-6px)]">
                          <Image
                            src={item.img}
                            alt=""
                            fill
                            className="object-cover rounded-full"
                            sizes="100%"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-2 font-bold text-center text-[.7rem]"
                      style={{ lineHeight: 2.4 }}
                    >
                      {item.caption}
                    </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
