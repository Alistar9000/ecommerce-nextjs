"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [show, setShow] = useState("");
  const isLoggedIn = false;
  const router = useRouter();
  const handleProfile = () => {
    if (isLoggedIn) show === "profile" ? setShow("") : setShow("profile");
    else router.push("/login");
  };
  const handleCart = () => {
    // setIsCartOpen(e=>!e)
    show === "cart" ? setShow("") : setShow("cart");
  };
  return (
    <div className="flex relative gap-4 items-center xl:gap-6">
      <Image
        onClick={handleProfile}
        alt=""
        src={"/profile.png"}
        width={22}
        height={22}
        className="cursor-pointer "
      />
      {show === "profile" && (
        <div className="absolute top-full left-0 mt-3 rounded-md bg-white overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,.2)] z-20 flex flex-col *:text-slate-600 *:py-3 *:px-4">
          <Link href={"/"} className="hover:bg-slate-50">
            profile
          </Link>
          <p className="hover:bg-slate-50 cursor-pointer">logout</p>
        </div>
      )}
      <Image
        alt=""
        src={"/notification.png"}
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative">
        <div className="bg-notif text-white absolute -top-4 -right-4 rounded-full h-6 w-6 text-sm flex justify-center items-center">1</div>
        <Image
          // onClick={handleCart}
          onMouseOver={handleCart}
          onMouseLeave={()=>setShow('')}
          alt=""
          src={"/cart.png"}
          width={22}
          height={22}
          className="cursor-pointer"
        />
        {show === "cart" && <CartModal setShow={setShow} />}
      </div>
    </div>
  );
};

export default NavIcons;
