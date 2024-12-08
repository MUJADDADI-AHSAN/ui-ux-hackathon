import React from 'react'

const Signup = () => {
  return (
    <div className="bg-black w-full">
      <div className="flex justify-center items-center h-[38px] px-4 text-white text-sm md:text-base lg:text-lg">
        <p className="text-center">
          Sign up and get 20% off your first order.{" "}
          <span className="font-medium underline cursor-pointer hover:text-gray-300">
            Sign Up Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
