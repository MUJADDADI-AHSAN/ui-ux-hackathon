import React from 'react'
import Image from 'next/image'
const Customers = () => {
    return (
      <div>
        <div className="w-full h-auto mb-16"> 
          <div className="flex justify-center h-full items-center">
            <div className="w-full h-auto"> 
              <div className="flex justify-between ml-32">
                <h1 className="font-[700] text-[48px] ">OUR HAPPY CUSTOMERS</h1>
              </div>
              
              <div className="flex flex-wrap justify-center items-center mt-9 gap-5">
                
                <div className="h-auto min-h-[240px] w-[400px] border-[1px] border-black rounded-[20px] sm:w-[100%] sm:h-auto md:w-[400px]">
                  <div className="flex justify-center items-center h-full">
                    <div className="w-[336px] h-auto">
                      <Image src="/assets/Frame 10.png" width={138} height={22} alt=" " />
                      <Image className="mt-4" src="/assets/Frame 31.png" width={110} height={24} alt=" " />
                      <p className="mt-4">
                        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="h-auto min-h-[240px] w-[400px] border-[1px] border-black rounded-[20px] sm:w-[100%] sm:h-auto md:w-[400px]">
                  <div className="flex justify-center items-center h-full">
                    <div className="w-[336px] h-auto">
                      <Image src="/assets/Frame 10.png" width={138} height={22} alt=" " />
                      <Image className="mt-4" src="/assets/Frame 31 (1).png" width={93} height={24} alt=" " />
                      <p className="mt-4">
                        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="h-auto min-h-[240px] w-[400px] border-[1px] border-black rounded-[20px] sm:w-[100%] sm:h-auto md:w-[400px]">
                  <div className="flex justify-center items-center h-full">
                    <div className="w-[336px] h-auto">
                      <Image src="/assets/Frame 10.png" width={138} height={22} alt=" " />
                      <Image className="mt-4" src="/assets/Frame 31 (2).png" width={110} height={24} alt=" " />
                      <p className="mt-4">
                        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Customers;