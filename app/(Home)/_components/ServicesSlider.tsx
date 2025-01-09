"use client";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ServiceType } from "./servises";
import RichViewer from "@/app/projects/_components/RichViewer";
import Link from "next/link";
import Image from "next/image";


export default function ServicesSlider({
  services,
}: {
  services: ServiceType[] | null;
}) {
  // SwiperCore.use([Pagination, Navigation]);
  return (
    services && (
      <div className="slider-container h-96">
        <Swiper
          slidesPerView={3}
        
          spaceBetween={30}
          centeredSlides={true}
          centerInsufficientSlides={true}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          loop={true}
          className="!h-auto my-5 mx-4 mx-0"
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            700:{
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
  
        >
          {services.map((service) => (
            <SwiperSlide key={service.slug} className="my-5">
              <div className="p-4 py-8 gap-4 h-auro w-full bg-white border border-gray-200 rounded-xl shadow-[0px_0px_16px_0px_#1963B966] text-black flex items-start cursor-pointer">
                <Image
                  src={service.icon.url}
                  alt={service.title} 
                  width={500}
                  height={500}
                  className="size-[70px] rounded-full border p-1"
                  />
                {/* <Avatar className="size-16 me-4">
                  <AvatarImage src={service.icon.url} />
                  <AvatarFallback>WA</AvatarFallback>
                </Avatar> */}
                <div className="flex-grow flex flex-col justify-center space-y-3">
                  <h3 className="text-xl font-[300] font-oxanium">{service.title}</h3>
                  <p className="!text-gray-400 line-clamp-4 text-wrap text-sm">
                    <RichViewer content={service.descripton} />
                  </p>
                  <Link
                    href={`/projects?projects=${service.slug}`}
                    className="underline text-[#1F7099] "
                  >
                    Show Projects
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
}
