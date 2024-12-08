import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
      <div>
        <div className="bg-[#F2F0F1] w-full flex flex-wrap md:flex-nowrap">
        
          <div className="w-full md:w-[50%] flex justify-center items-center md:ml-8 p-4 md:p-0">
            <div className="w-[90%] md:w-[70%] h-auto text-center md:text-left flex flex-col justify-center">
              <h1 className="font-[700] text-[32px] md:text-[48px] lg:text-[64px] leading-tight">
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h1>
              <p className="font-[400] text-[14px] md:text-[16px] mt-4 md:mt-7 leading-relaxed">
                Browse through our diverse range of meticulously crafted garments, designed
                to bring out your individuality and cater to your sense of style.
              </p>
  
            
              <button className="mt-7 md:mt-10 bg-black text-white w-[180px] md:w-[210px] h-[45px] md:h-[52px] rounded-full mx-auto md:mx-0">
                Shop Now
              </button>
            </div>
          </div>
  
        
          <div className="w-full md:w-[50%] mt-4 md:mt-0">
            <Image
              className="w-full h-auto object-cover"
              src="/assets/hero.jpeg"
              width={720}
              height={100}
              alt="Hero Image"
              priority
            />
          </div>
        </div>
  
     
        <div className="w-full h-auto bg-black flex justify-center items-center gap-8 md:gap-16 flex-wrap py-6">
          <div>
            <Image src="/assets/Group.png" width={166} height={33} alt="Brand 1" />
          </div>
          <div>
            <Image src="/assets/zara-logo-1 1.png" width={91} height={38} alt="Brand 2" />
          </div>
          <div>
            <Image src="/assets/gucci-logo-1 1.png" width={156} height={36} alt="Brand 3" />
          </div>
          <div>
            <Image src="/assets/Group (1).png" width={194} height={32} alt="Brand 4" />
          </div>
          <div>
            <Image src="/assets/Group (2).png" width={206} height={33} alt="Brand 5" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;