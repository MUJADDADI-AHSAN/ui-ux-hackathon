import React from 'react'
import Image from 'next/image'

const Arrivals = () => {
    return (
      <div>
        <div className="w-full h-auto flex justify-center items-center py-10">
          <div className="w-[90%]">
  
            
            <div className="flex justify-center">
              <h1 className="font-[700] text-[48px]">NEW ARRIVALS</h1>
            </div>
  
            
            <div className="flex gap-7 justify-center flex-wrap mt-7">
  
            
              <div className="w-full sm:w-[295px]">
                <div className="bg-[#F0EEED] w-full h-[298px] rounded-[20px]">
                  <Image className="rounded-[20px] w-full h-[298px] object-cover" src="/assets/image 7.png" height={296} width={298} alt="T-shirt with Tape Details" />
                </div>
                <h1 className="font-[700] text-[20px] text-center mt-4">T-shirt with Tape Details</h1>
                <Image src="/assets/Frame 35.png" width={150} height={19} alt="Brand logo" className="mx-auto mt-2" />
                <h3 className="font-[700] text-[24px] text-center mt-2">$120</h3>
              </div>
  
             
              <div className="w-full sm:w-[295px]">
                <div className="bg-[#F0EEED] w-full h-[298px] rounded-[20px]">
                  <Image className="rounded-[20px] w-full h-[298px] object-cover" src="/assets/image 8.png" height={200} width={444} alt="Skinny Fit Jeans" />
                </div>
                <h1 className="font-[700] text-[20px] text-center mt-4">Skinny Fit Jeans</h1>
                <Image src="/assets/Frame 35.png" width={150} height={19} alt="Brand logo" className="mx-auto mt-2" />
                <h3 className="font-[700] text-[24px] text-center mt-2">$240</h3>
              </div>
  
           
              <div className="w-full sm:w-[295px]">
                <div className="bg-[#F0EEED] w-full h-[298px] rounded-[20px]">
                  <Image className="rounded-[20px] w-full h-[298px] object-cover" src="/assets/image 9.png" height={296} width={444} alt="Checkered Shirt" />
                </div>
                <h1 className="font-[700] text-[20px] text-center mt-4">Checkered Shirt</h1>
                <Image src="/assets/Frame 35.png" width={150} height={19} alt="Brand logo" className="mx-auto mt-2" />
                <h3 className="font-[700] text-[24px] text-center mt-2">$180</h3>
              </div>
  
       
              <div className="w-full sm:w-[295px]">
                <div className="bg-[#F0EEED] w-full h-[298px] rounded-[20px]">
                  <Image className="rounded-[20px] w-full h-[298px] object-cover" src="/assets/image 10.png" height={295} width={298} alt="Sleeve Striped T-shirt" />
                </div>
                <h1 className="font-[700] text-[20px] text-center mt-4">Sleeve Striped T-shirt</h1>
                <Image src="/assets/Frame 35.png" width={150} height={19} alt="Brand logo" className="mx-auto mt-2" />
                <h3 className="font-[700] text-[24px] text-center mt-2">$180</h3>
              </div>
  
            </div>
  
          
            <div className="flex justify-center items-end mt-8">
              <button className="w-[218px] h-[52px] rounded-[62px] border-[1px] border-black">View All</button>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Arrivals;