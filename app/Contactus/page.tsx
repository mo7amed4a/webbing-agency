import React from 'react';

import Talkwithus from '../Contactus/_components/Talkwithus'
export default function Contactus() {
  return (
    <div className='mt-20 mb-6 lg:mb-0'>
      <div 
        className="w-full h-[88px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center "
        style={{ backgroundImage: `url("/assets/imgs/contact us.png")` }}
      >
        <h1 className="text-center text-5xl p-6 font-oxanium text-primary">
          Contact Us
        </h1>
      </div>
      <Talkwithus></Talkwithus>
      
    </div>
  );
}
