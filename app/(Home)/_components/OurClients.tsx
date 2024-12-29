"use client";
import { CustomCarousel } from "@/components/CustomCarousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const OurClient = () => {


  const slides = [
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
  ];

  return (
    <div className="w-full h-[500px] bg-[#EFF6FF]">
      <div className="container mx-auto">
        <div className="p-[30px] text-center lg:text-left">
          {" "}
   
          <h1 className="text-xxl font-thin font-oxanium text-5xl mb-4  ">
            What our{" "}
            <span className="text-[#1F7099] text-xxl  font-oxanium">
              Clients
            </span>{" "}
            say?
          </h1>
        </div>

        <div className="">
          <div className="">
            <CustomCarousel>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="md:basis-2/4 ps-11">
                    <Card className="flex ">
                      <CardHeader className="p-4">
                        <Avatar>
                          <AvatarImage src={slide.img} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </CardHeader>
                      <CardContent className="p-4">
                        <h1 className="text-black text-2xl mb-2">
                          {slide.title}
                        </h1>
                        <div className="flex mb-4">⭐⭐⭐⭐⭐</div>
                        <p className="text-gray-600 font-thin">
                          {slide.description}
                        </p>
                        <p className="text-gray-600 font-thin">
                          {slide.description}
                        </p>
                      </CardContent>
                    </Card>
                </CarouselItem>
              ))}
            </CustomCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
