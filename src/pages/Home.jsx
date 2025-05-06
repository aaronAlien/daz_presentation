import React from "react";
import qr from "../assets/qr_link.png";

const Home = () => {
  return (
    <div className='max-w-2xl mx-auto'>
        <a href='https://linktr.ee/thatshakespeare' target='_blank' className='flex items-center justify-center h-[40vh] w-full'>
          <img src={qr} alt='my links' className='w-1/8' />
        </a>
      <div className='absolute lg:bottom-8 z-10 lg:left-16 max-w-[60%]'>
        <h1 className='text-10rem font-courier-prime font-bold lg:leading-40 tracking-widest'>
          PECKHAM <br />
          DAZ
        </h1>
      </div>
      <div className='absolute lg:bottom-0 z-0 right-0 lg:right-56 max-w-[60%] p-0'>
        <h1 className='text-12rem font-ruthie tracking-tight font-semibold text-blue-600'>
          WRAPPED
        </h1>
      </div>
    </div>
  );
};

export default Home;
