'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function Hero() {
  const heroimge = "/assets/imgs/image.png";
  const partimge = "/assets/imgs/59fe0f54cc381ab9e10410ad71c48cf4.png";

  const [textRef, textInView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [imageRef, imageInView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div
      style={{
        backgroundImage: `url(${heroimge})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'top 80px center',
      }}
      className="mt-32"
    >
      <div className="flex px-5 md:px-10 container mt-14 lg:max-w-[95%] mx-auto">
        <div className="w-full min-h-screen">
          <div className="px-4 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
            
            <motion.div 
              ref={textRef}
              className="lg:w-1/2 md:p-4 flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-oxanium text-black mb-6">
                Transforming Ideas into Digital Solutions
              </h2>
              <p className="text-sm sm:text-lg md:text-2xl font-thin mb-4 sm:mb-5">
                We deliver innovative UI/UX design, website and app development, and social media solutions tailored to your business needs. Let’s turn your ideas into impactful digital solutions.
              </p>
              <Link href="/Contactus"
                className="text-white py-2 px-6 sm:px-[70px] rounded-full"
                style={{
                  background: 'linear-gradient(to left, #A2C6D9, #1F7099)',
                }}
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div 
              ref={imageRef}
              className="lg:w-1/2 p-4 flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 50 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                width={300}
                height={300}
                src={partimge}
                className="w-full h-[50vh] sm:h-[60vh] lg:h-[85vh] object-contain"
                alt="Hero Part Image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}