'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function HeroProjects() {
  const image = "/assets/imgs/image (12).png"
  const partimge = "/assets/imgs/59fe0f54cc381ab9e10410ad71c48cf4.png";
  const [currentImage, setCurrentImage] = useState(partimge);
  const [isFading, setIsFading] = useState(false); // حالة للتحكم في عملية الـ fade

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // بدء عملية الـ fade
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage === partimge ? image : partimge));
        setIsFading(false); // انتهاء عملية الـ fade بعد تغيير الصورة
      }, 500); // مدة الـ fade
    }, 2000); // تغيير الصورة كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between min-h-screen">
        
        {/* النص يتمركز في الشاشة الصغيرة ويعود للوضع العادي في الشاشة الكبيرة */}
        <div className="lg:w-1/2 p-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl text-[#1F7099] font-oxanium font-thin mb-4">
            Our Projects
          </h1>
          <p className="mb-6 text-2xl font-extraThin font-inter">
            Take a look at some of our recent work and see how we bring ideas to life through innovative design, cutting-edge technology, and a commitment to excellence in every project.
          </p>
        </div>

        <div className="lg:w-1/2 h-[80vh] p-4 justify-center lg:justify-end mt-16 hidden lg:flex">
          <Image
            width={400}
            height={400}
            src={currentImage}
            className={`w-full h-72 lg:h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
            alt="Hero Part Image"
          />
        </div>
      </div>
    </div>
  );
}
