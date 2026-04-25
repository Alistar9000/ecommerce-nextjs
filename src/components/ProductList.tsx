"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductList = () => {
  return (
    <div className="mt-12  gap-x-8 gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
      <Link href={"/test"} className="flex  flex-col gap-4 w-full ">
        <div className="relative w-full h-80 ">
          <Image
            className="absolute z-20 rounded-md hover:opacity-0 transition-all duration-500"
            alt=""
            src={
              "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            fill
            sizes="25vw"
          />
          <Image
            className="absolute rounded-md"
            alt=""
            src={
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            fill
            sizes="25vw"
          />
        </div>
        <div className="flex *:text-sm  items-center justify-between">
          <span className="font-medium">ّProduct Name</span>
          <span className="font-semibold">$45</span>
        </div>
        <p className="text-sm text-gray-500">Description dadgdf fd g</p>
        <button className="rounded-2xl py-1 text-sm w-max px-4 ring-1 ring-notif text-notif transition-all duration-300 ease-in-out hover:bg-notif hover:text-white">Add to cart</button>
      </Link>
      <Link href={"/test"} className="flex  flex-col gap-4 w-full ">
        <div className="relative w-full h-80 ">
          <Image
            className="absolute z-20 rounded-md hover:opacity-0 transition-all duration-500"
            alt=""
            src={
              "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            fill
            sizes="25vw"
          />
          <Image
            className="absolute rounded-md"
            alt=""
            src={
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            fill
            sizes="25vw"
          />
        </div>
        <div className="flex *:text-sm  items-center justify-between">
          <span className="font-medium">ّProduct Name</span>
          <span className="font-semibold">$45</span>
        </div>
        <p className="text-sm text-gray-500">Description dadgdf fd g</p>
        <button className="rounded-2xl py-1 text-sm w-max px-4 ring-1 ring-notif text-notif transition-all duration-300 ease-in-out hover:bg-notif hover:text-white">Add to cart</button>
      </Link>
      <Link href={"/test"} className="flex   flex-col gap-4 w-full">
        <div className="relative w-full h-80 ">
          <Image
            className="absolute z-20 rounded-md hover:opacity-0 transition-all duration-500"
            alt=""
            src={
              "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            fill
            sizes="25vw"
          />
          <Image
            className="absolute rounded-md"
            alt=""
            src={
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            fill
            sizes="25vw"
          />
        </div>
        <div className="flex *:text-sm  items-center justify-between">
          <span className="font-medium">ّProduct Name</span>
          <span className="font-semibold">$45</span>
        </div>
        <p className="text-sm text-gray-500">Description dadgdf fd g</p>
        <button className="rounded-2xl py-1 text-sm w-max px-4 ring-1 ring-notif text-notif transition-all duration-300 ease-in-out hover:bg-notif hover:text-white">Add to cart</button>
      </Link>
      <Link href={"/test"} className="flex  flex-col gap-4 w-full">
        <div className="relative w-full h-80 ">
          <Image
            className="absolute z-20 rounded-md hover:opacity-0 transition-all duration-500"
            alt=""
            src={
              "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            fill
            sizes="25vw"
          />
          <Image
            className="absolute rounded-md"
            alt=""
            src={
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            fill
            sizes="25vw"
          />
        </div>
        <div className="flex *:text-sm  items-center justify-between">
          <span className="font-medium">ّProduct Name</span>
          <span className="font-semibold">$45</span>
        </div>
        <p className="text-sm text-gray-500">Description dadgdf fd g</p>
        <button className="rounded-2xl py-1 text-sm w-max px-4 ring-1 ring-notif text-notif transition-all duration-300 ease-in-out hover:bg-notif hover:text-white">Add to cart</button>
      </Link>
     
    </div>
  );
};

export default ProductList;
