import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
export default function Hero() {
  const heroimge = "/assets/imgs/image.png"
  const partimge = "/assets/imgs/59fe0f54cc381ab9e10410ad71c48cf4.png";
  return (
    <div style={{
      backgroundImage: `url(${heroimge})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'contain', 
      backgroundPosition: 'top 80px center', 
    }}>
      <Carousel className='flex px-10 container mt-14 lg:max-w-[95%] mx-auto'>
        <CarouselContent className='w-full min-h-screen'>
          <CarouselItem className='px-4 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between'>
          <div className="lg:w-1/2 md:p-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl  font-oxanium text-black  mb-8">
            Transforming Ideas into Digital Solutions
            </h2>
            <p className="text-lg md:text-2xl font-thin mb-5">
              We  tt deliver innovative UI/UX design, website and app development, and social media solutions tailored to your business needs. Let’s turn your ideas into impactful digital solutions.
            </p>
            <button
              className="text-white py-2 px-[70px] rounded-full"
              style={{
                background: 'linear-gradient(to left, #A2C6D9, #1F7099)',
              }}
            >
              Get Started
            </button>
          </div>
          <div className="lg:w-1/2 p-4 justify-end hidden lg:flex">
            <Image
            width={400}
            height={400}
              src={partimge}
              className="w-full h-[60vh] lg:h-[85vh] object-cover"
              alt="Hero Part Image"
            />
          </div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious className='start-3' />
        <CarouselNext className='end-3 z-50'/> */}
      </Carousel>
    </div>
  );
}
