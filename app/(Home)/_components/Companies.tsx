"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Companies() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className="bg-primary/20 py-10">
      <Carousel className="container lg:max-w-[90%] mx-auto">
        <CarouselContent className="w-full flex flex-wrap justify-between items-center [&>img]:w-[120px] sm:[&>img]:w-[150px] md:[&>img]:w-48 [&>img]:mx-auto gap-y-6">
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 text-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={"/companies/google.png"}
                width={1500}
                height={1500}
                alt="Google"
                className="mx-auto p-8"
              />
            </motion.div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 text-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={"/companies/microsoft.png"}
                width={1500}
                height={1500}
                alt="Microsoft"
                className="mx-auto p-8"
              />
            </motion.div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 text-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src={"/companies/paypal.png"}
                width={1500}
                height={1500}
                alt="PayPal"
                className="mx-auto p-8"
              />
            </motion.div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4 text-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image
                src={"/companies/dribble.png"}
                width={1500}
                height={1500}
                alt="Dribbble"
                className="mx-auto md:p-8"
              />
            </motion.div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}