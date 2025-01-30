'use client';
import Image from 'next/image';
import React from 'react';

export default function Chooses() {
  const img = "/assets/imgs/immmg.png";
  const img2 = "/assets/imgs/1111111.png";
  const img3 = "/assets/imgs/fluent-emoji_laptop.png";

  return (
    <div className="min-h-screen flex items-center justify-center mt-16 px-4 bg-[#eff6ff] lg:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-8 lg:gap-x-12"> 
        
        <div className="relative">
          <Image
            src={img}
            width={400}
            height={400}
            alt="Team working"
            className='md:w-[400px] w-[350px] mb-3 lg:mb-0'
          />
          <div className="absolute w-full lg:rounded-lg md:bottom-0 drop-shadow md:left-32 bg-white p-4 h-16 rounded-full justify-around items-center flex"
            style={{ boxShadow: '0 4px 6px rgba(31, 112, 153, 0.3)' }}>
            <div className='flex flex-col items-center'>
              <span className="text-2xl text-[#1f7099]">50+</span>
              <p className="text-sm text-black">Client review</p>
            </div>
            <div className='flex flex-col items-center'>
              <span className="text-2xl text-[#1f7099]">20+</span>
              <p className="text-sm text-black">Completed Projects</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-32 ps-5 lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1 className="text-5xl mb-9 font-thin font-oxanium">
            Why <span className="text-[#1F7099]">Choose</span> Us?
          </h1>

          <div className="space-y-16">
            <div className="flex gap-x-4 md:gap-x-6">
              <Image
                src={img2}
                width={50}
                height={50}
                alt="icon"
                className="w-9 h-9"
              />
              <div>
                <h3 className="text-xl font-semibold mb-1">Focus on Innovation & Scalability</h3>
                <p className="text-[#929497] text-base md:text-lg leading-relaxed">
                  We craft innovative solutions that not only <br /> meet today’s needs but are scalable to <br /> grow with your business.
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 md:gap-x-6">
              <Image
                src={img2}
                width={50}
                height={50}
                alt="icon"
                className="w-9 h-9"
              />
              <div>
                <h3 className="text-xl font-semibold mb-1">Expertise along Industries</h3>
                <p className="text-[#929497] text-base md:text-lg leading-relaxed">
                  With experience in UI/UX design, web <br /> development, and app solutions, we&apos;ve <br /> worked with a diverse range of clients <br /> across various industries.
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 md:gap-x-6">
              <Image
                src={img3}
                width={50}
                height={50}
                alt="icon"
                className="w-9 h-9"
              />
              <div>
                <h3 className="text-xl font-semibold mb-1">Dedicated Support</h3>
                <p className="text-[#929497] text-base md:text-lg leading-relaxed">
                  Even after the project is complete, we&apos;re <br /> here to provide ongoing support and <br /> ensure your digital solution continues to <br /> perform at its best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
