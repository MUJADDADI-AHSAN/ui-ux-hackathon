import React from 'react'
import Image from 'next/image'

const Footer= () => {
    return (
      <div>
        <div className="w-full h-auto mb-16">
          
          <div className="flex justify-center">
            <div className="bg-black w-[85%] sm:w-[95%] h-auto rounded-[20px] relative z-10 py-6 px-4">
              <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center">
               
                <div className="ml-0 sm:ml-12 mb-6 sm:mb-0 text-center sm:text-left">
                  <h1 className="text-white font-[700] text-[32px] sm:text-[40px] leading-none">
                    STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
                  </h1>
                </div>
  
         
                <div className="flex flex-col justify-center items-center w-full sm:w-auto">
                  <input
                    className="w-[300px] sm:w-[349px] h-[48px] px-[16px] py-[12px] rounded-[62px] mb-3 text-center"
                    type="text"
                    placeholder="Enter your email address"
                  />
                  <button className="bg-white w-[300px] sm:w-[349px] h-[46px] text-black rounded-[62px] font-semibold text-center">
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            </div>
          </div>
  
         
          <div className="bg-[#F0F0F0] pt-24">
            <div className="w-full h-auto flex justify-center items-center">
              <div className="w-[1240px] flex gap-28 flex-wrap justify-between">
                
                <div className="w-[248px] h-auto sm:w-[100%] md:w-[248px] mb-8">
                  <h1 className="font-[700] text-[33.45px]">SHOP.CO</h1>
                  <p>We have clothes that suit your style and which you’re proud to wear. From women to men.</p>
                  <Image className="mt-6" src="/assets/Social.png" width={148} height={28} alt="" />
                </div>
  
              
                <div className="w-[104px] h-auto sm:w-[100%] md:w-[104px] space-y-[14px] mb-8">
                  <h1 className="font-semibold">COMPANY</h1>
                  <h3>About</h3>
                  <h3>Features</h3>
                  <h3>Works</h3>
                  <h3>Career</h3>
                </div>
  
    
                <div className="w-[136px] h-auto sm:w-[100%] md:w-[136px] space-y-[8px] mb-8">
                  <h1 className="font-semibold">HELP</h1>
                  <h3>Customer Support</h3>
                  <h3>Delivery Details</h3>
                  <h3>Terms & Conditions</h3>
                  <h3>Privacy Policy</h3>
                </div>
  
          
                <div className="w-[149px] h-auto sm:w-[100%] md:w-[149px] space-y-[14px] mb-8">
                  <h1 className="font-semibold">FAQ</h1>
                  <h3>Account</h3>
                  <h3>Manage Deliveries</h3>
                  <h3>Orders</h3>
                  <h3>Payments</h3>
                </div>
  
         
                <div className="w-[149px] h-auto sm:w-[100%] md:w-[149px] space-y-[8px] mb-8">
                  <h1 className="font-semibold">RESOURCES</h1>
                  <h3>Free eBooks</h3>
                  <h3>Development Tutorial</h3>
                  <h3>How to - Blog</h3>
                  <h3>YouTube Playlist</h3>
                  <hr />
                </div>
              </div>
            </div>
  
          
            <div className="flex justify-center items-center mt-10">
              <div className="w-[1240px] h-[90px] flex justify-between items-center border-t-2 border-black">
                <h1>Shop.co © 2000-2023, All Rights Reserved</h1>
                <div>
                  <Image src="/assets/Frame 53.png" width={281} height={30} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;