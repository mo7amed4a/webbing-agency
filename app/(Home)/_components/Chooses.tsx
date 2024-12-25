import Image from 'next/image';
import React from 'react';

export default function Chooses() {
  const img = "/assets/imgs/immmg.png";
  const img2 = "/assets/imgs/1111111.png";
  const img3 = "/assets/imgs/fluent-emoji_laptop.png";

  return (
    <div className="min-h-screen flex items-center justify-center mt-16 px-4 bg-[#eff6ff] lg:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-8 lg:gap-x-12"> 
        
      
        <div className="relative hidden lg:block">
          <Image
            src={img}
            width={400}
            height={400}
            alt="Team working"
          />
          <div className="absolute bottom-0 left-32 bg-white p-4 shadow-lg rounded-lg flex gap-x-6">
            <div>
              <span className="text-2xl font-bold">50+</span>
              <p className="text-sm text-gray-600">Client review</p>
            </div>
            <div>
              <span className="text-2xl font-bold">20+</span>
              <p className="text-sm text-gray-600">Completed Projects</p>
            </div>
          </div>
        </div>

      
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"> 
          <h1 className="text-5xl mb-9  font-thin font-oxanium">
            Why <span className="text-[#1F7099]">Choose</span> Us?
          </h1>

          <div className="space-y-16">

           
            <div className="flex items-center gap-x-6">
              <Image
                src={img2}
                width={50}
                height={50}
                alt="icon"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-semibold mb-1">Focus on Innovation & Scalability</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We craft innovative solutions that not only meet today&apos;s needs but are scalable to grow with your business.
                </p>
              </div>
            </div>

            
            <div className="flex items-center gap-x-6">
              <Image
                src={img2}
                width={50}
                height={50}
                alt="icon"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-semibold mb-1">Expertise along Industries</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With experience in UI/UX design, web development, and app solutions, we&apos;ve worked with a diverse range of clients across various industries.
                </p>
              </div>
            </div>

           
            <div className="flex items-center gap-x-6">
              <Image
                src={img3}
                width={50}
                height={50}
                alt="icon"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-semibold mb-1">Dedicated Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Even after the project is complete, we&apos;re here to provide ongoing support and ensure your digital solution continues to perform at its best.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
