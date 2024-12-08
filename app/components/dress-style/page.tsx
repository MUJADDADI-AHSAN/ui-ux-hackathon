import React from 'react'
import Image from 'next/image'




const Dress = () => {
  return (
    <div>
      <div className="w-full h-auto flex justify-center items-end py-12">
        <div className="bg-[#F0F0F0] w-[85%] h-auto rounded-[40px] py-10">
          <div className="flex justify-center">
            <h1 className="font-[700] text-[48px] mt-16 text-center">BROWSE BY DRESS STYLE</h1>
          </div>
         
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="w-[407px] h-[289px] rounded-[20px] sm:w-full sm:h-[300px] md:w-[407px] md:h-[289px]">
              <Image className="rounded-[20px] w-full h-full object-cover" src="/assets/Frame 61.png" height={289} width={407} alt="Casual Dress" />
            </div>
            <div className="w-[684px] h-[289px] rounded-[20px] sm:w-full sm:h-[300px] md:w-[684px] md:h-[289px]">
              <Image className="rounded-[20px] w-full h-full object-cover" src="/assets/Frame 62.png" height={289} width={684} alt="Formal Dress" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-7">
            <div className="w-[684px] h-[289px] rounded-[20px] sm:w-full sm:h-[300px] md:w-[684px] md:h-[289px]">
              <Image className="rounded-[20px] w-full h-full object-cover" src="/assets/Frame 64.png" height={289} width={684} alt="Party Dress" />
            </div>
            <div className="w-[407px] h-[289px] rounded-[20px] sm:w-full sm:h-[300px] md:w-[407px] md:h-[289px]">
              <Image className="rounded-[20px] w-full h-full object-cover" src="/assets/Frame 63.png" height={289} width={407} alt="Gym Dress" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dress;