import Image from "next/image";
import React from "react";

const CartModal = ({setShow}:{setShow:(param:string)=>void}) => {
  const cartItems = true;
  return (
    <div onMouseOver={()=>setShow('cart')} onMouseLeave={()=>setShow('')} className="w-max absolute top-full bg-white flex flex-col gap-6 z-20 rounded-md p-4 right-0  shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <div className="flex gap-8 flex-col">
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex gap-4">
            <Image
              alt=""
              src="https://images.pexels.com/photos/30948820/pexels-photo-30948820/free-photo-of-serene-sunrise-over-misty-forest-lake-reflection.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              {/* TOP */}
              <div className="">
                {/* TITLE */}
                <div className="flex gap-8 items-center justify-between">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$48</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
              </div>
              {/* BOTTOM */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500 cursor-pointer">Remove</span>
              </div>
            </div>
          </div>
          
          {/* BOTTOM */}
          <div className="">
            <div className="flex justify-between  items-center font-semibold text-sm">
              <span>Subtotal</span>
              <span>$ 40.5</span>
            </div>
            <div className="text-gray-400 text-sm mt-2 mb-4">
              Shipping and taxes calcutated at checkout
            </div>
            <div className="flex  *:py-2 *:px-3  *:rounded-md *:text-sm justify-between items-center">
              <button className="ring-1 ring-gray-300">View cart</button>
              <button className="bg-black text-white">Check out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
