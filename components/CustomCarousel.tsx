"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselApi
} from "./ui/carousel";

export function CustomCarousel({
  children,
}:{
  children: React.ReactNode;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="mx-auto w-full overflow-hidden space-y-10 relative">
      
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ direction: "ltr" }}
      >
        <CarouselPrevious className="absolute size-10 z-50 !bottom-0 !bg-primary"/>
        <CarouselNext />
        <CarouselContent className="w-full py-3">
          {children}
        </CarouselContent>
      </Carousel>

      <div className="hidden gap-x-4 justify-center md:flex   items-center">
      {[...Array(count)].map((item , index) => (
        <div
          key={index}
          className={`size-2 rounded-full text-3xl  bg-muted-foreground/50  cursor-pointer ${(index) === (current-1) && "!bg-primary"}`}
          onClick={() => handleDotClick(index)}
        ></div>
      ))}
      </div>
    </div>
  );
}
