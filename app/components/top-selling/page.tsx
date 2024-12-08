import React from 'react'
import Image from 'next/image'

const Selling = () => {
    return (
      <div className="mt-20">
        <hr />
        <div className="w-full h-auto flex justify-center items-center py-10">
          <div className="w-[90%] mt-10">
  
            
            <div className="flex justify-center">
              <h1 className="font-[700] text-[48px]">TOP SELLING</h1>
            </div>
  
            
            <div className="flex gap-7 justify-center flex-wrap mt-7">
  
            
              <div className="w-full sm:w-[295px]">
                <div className="bg-[#F0EEED] w-full h-[298px] rounded-[20px]">
                  <Image className="rounded-[20px] w-full h-[298px] object-cover" src="/assets/Frame 32.png" height={296} width={298} alt="Vertical Striped Shirt" />
                </div>
                <h1 className="font-[700] text-[20px] text-center mt-4">Vertical Striped Shirt</h1>
                <Image src="/assets/Frame 35.png" width={150} height={19} alt="Brand logo" className="mx-auto mt-2" />
                <h3 className="font-[700] text-[24px] text-center mt-2">$120</h3>
              </div>
  
             
              <div className="w-full sm:w-[295px]">
                <div className="bg-[#F0EEED] w-full h-[298px] rounded-[20px]">
                  <Image className="rounded-[20px] w-full h-[298px] object-cover" src="/assets/Frame 33.png" height={200} width={444} alt="Courage Graphic T-shirt" />
                </div>
                <h1 className="font-[700] text-[20px] text-center mt-4">Courage Graphic T-shirt</h1>
                <Image src="/assets/Frame 35.png" width={150} height={19} alt="Brand logo" className="mx-auto mt-2" />
                <h3 className="font-[700] text-[24px] text-center mt-2">$240</h3>
              </div>
  
          
              <div className="w-full sm:w-[295px]">
                <div className="bg-[#F0EEED] w-full h-[298px] rounded-[20px]">
                  <Image className="rounded-[20px] w-full h-[298px] object-cover" src="/assets/Frame 34.png" height={296} width={444} alt="Loose Fit Bermuda Shorts" />
                </div>
                <h1 className="font-[700] text-[20px] text-center mt-4">Loose Fit Bermuda Shorts</h1>
                <Image src="/assets/Frame 35.png" width={150} height={19} alt="Brand logo" className="mx-auto mt-2" />
                <h3 className="font-[700] text-[24px] text-center mt-2">$180</h3>
              </div>
  
          
              <div className="w-full sm:w-[295px]">
                <div className="bg-[#F0EEED] w-full h-[298px] rounded-[20px]">
                  <Image className="rounded-[20px] w-full h-[298px] object-cover" src="/assets/Frame 38.png" height={295} width={298} alt="Faded Skinny Jeans" />
                </div>
                <h1 className="font-[700] text-[20px] text-center mt-4">Faded Skinny Jeans</h1>
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
  
  export default Selling;