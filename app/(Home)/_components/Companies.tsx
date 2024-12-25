import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

export default function Companies() {
  return (
    <div className="bg-primary/20 py-10">
      <Carousel className="container lg:max-w-[90%] mx-auto">
        <CarouselContent className="w-full flex items-center [&>*>img]:w-48 [&>*>img]:mx-auto">
          <CarouselItem className="basis-2/4 lg:basis-1/4">
            <Image
            src={`/companies/google.png`}
            width={1500}
            height={1500}
            alt=""
            />
          </CarouselItem>
          <CarouselItem className="basis-2/4 lg:basis-1/4">
            <Image
            src={`/companies/microsoft.png`}
            width={1500}
            height={1500}
            alt=""
            />
          </CarouselItem>
          <CarouselItem className="basis-2/4 lg:basis-1/4">
            <Image
            src={`/companies/paypal.png`}
            width={1500}
            height={1500}
            alt=""
            />
          </CarouselItem>
          <CarouselItem className="basis-2/4 lg:basis-1/4">
            <Image
            src={`/companies/dribble.png`}
            width={1500}
            height={1500}
            alt=""
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
