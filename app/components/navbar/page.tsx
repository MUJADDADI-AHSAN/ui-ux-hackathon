import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <div className="h-[80px] flex justify-center items-center bg-white">
        <div className="w-[90%] max-w-[1200px] flex justify-between items-center">
         
          <div className="w-[50%] flex items-center">
            <ul className="flex items-center h-full gap-6 md:gap-[40px] flex-wrap">
              <li className="font-bold text-xl md:text-[32px]">SHOP.CO</li>
              <li className="hidden md:block">
                <Link href="/">Shop</Link>
              </li>
              <li className="hidden md:block">
                <Link href="/">On Sale</Link>
              </li>
              <li className="hidden md:block">
                <Link href="/">New Arrivals</Link>
              </li>
              <li className="hidden md:block">
                <Link href="/">Brands</Link>
              </li>
            </ul>
          </div>

         
          <div className="w-[50%] flex justify-end items-center space-x-4">
            
            <input
              className="hidden md:block rounded-full bg-[#F0F0F0] w-[90%] max-w-[300px] h-[45px] py-[12px] px-[16px] text-sm placeholder-gray-500"
              type="text"
              placeholder="Search for products..."
            />

         
            <div className="flex space-x-2">
              <Image
                src="/assets/Frame (1).png"
                width={24}
                height={24}
                alt="Cart Icon"
                className="cursor-pointer"
              />
              <Image
                src="/assets/Frame (2).png"
                width={24}
                height={24}
                alt="User Icon"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="md:hidden bg-white py-2">
        <div className="flex justify-center items-center space-x-6">
          <Link href="/">Shop</Link>
          <Link href="/">On Sale</Link>
          <Link href="/">New Arrivals</Link>
          <Link href="/">Brands</Link>
        </div>
        <div className="mt-2 flex justify-center">
          <input
            className="rounded-full bg-[#F0F0F0] w-[90%] max-w-[300px] h-[40px] py-[8px] px-[12px] text-sm placeholder-gray-500"
            type="text"
            placeholder="Search for products..."
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
