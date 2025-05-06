import React from "react";
import Coffee from "./Coffee";

const WebDevProject = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex space-x-20 justify-center items-center'>
        <a
          target='_blank'
          href='https://aaronalien.github.io/coffeeShop/'
          className='font-courier-prime uppercase text-center text-xl lg:text-4xl font-bold my-6 hover:opacity-50 transition duration-500 ease-in-out'
        >
          // live
        </a>
        <a
          target='_blank'
          href='https://github.com/aaronAlien/coffeeShop'
          className='font-courier-prime uppercase text-center text-xl lg:text-4xl font-bold my-6 hover:opacity-50 transition duration-500 ease-in-out'
        >
          // code
        </a>
      </div>

      <Coffee />
    </div>
  );
};

export default WebDevProject;
