"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [open, Setopen] = useState(false);

  return (
    <div className="">
      <Image
        onClick={() => Setopen((e) => !e)}
        src={"/menu.png"}
        className="cursor-pointer object-cover"
        height={28}
        width={28}
        alt="menu"
      />
      {open && 
      <div className="max-sm:absolute inset-0 m-auto text-xl z-10 mt-20 flex max-sm:flex-col items-center justify-center gap-8 bg-black text-white">
        <Link href={'/'}>Homepage</Link>
        <Link href={'/'}>Shop</Link>
        <Link href={'/'}>Deals</Link>
        <Link href={'/'}>About</Link>
        <Link href={'/'}>Contact</Link>
        <Link href={'/'}>Logout</Link>
        <Link href={'/'}>Cart(1)</Link>
      </div>
      }
    </div>
  );
};

export default Menu;
