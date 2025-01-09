import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

export default function Companies() {
  return (
    <div className="bg-primary/20 py-10">
      <Carousel className="container lg:max-w-[90%] mx-auto">
        <CarouselContent className="w-full flex flex-wrap justify-between items-center [&>img]:w-[120px] sm:[&>img]:w-[150px] md:[&>img]:w-48 [&>img]:mx-auto gap-y-6">
      
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 text-center">
            <Image
              src={"/companies/google.png"}
              width={1500}
              height={1500}
              alt="Google"
              className="mx-auto"
            />
          </CarouselItem>
         
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 text-center">
            <Image
              src={"/companies/microsoft.png"}
              width={1500}
              height={1500}
              alt="Microsoft"
              className="mx-auto"
            />
          </CarouselItem>
        
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 text-center">
            <Image
              src={"/companies/paypal.png"}
              width={1500}
              height={1500}
              alt="PayPal"
              className="mx-auto"
            />
          </CarouselItem>
         
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 text-center">
            <Image
              src={"/companies/dribble.png"}
              width={1500}
              height={1500}
              alt="Dribbble"
              className="mx-auto"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}