"use client";
import React from "react";
import img1 from "../../../public/assets/imgs/Image (70).png";
import img2 from "../../../public/assets/imgs/Image (71).png";
import Image from "next/image";
import RichViewer from "@/app/projects/_components/RichViewer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurStory({ description }: { description: [] }) {
  const [titleRef, titleInView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [image1Ref, image1InView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [image2Ref, image2InView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [contentRef, contentInView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className="flex md:flex-row flex-col justify-around">
      <div>
        <div className="flex gap-9 relative">
          <motion.div
            ref={image1Ref}
            initial={{ opacity: 0, x: -50 }}
            animate={image1InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Image src={img1} className="h-[300px] mt-6 hidden xl:block" alt="" />
          </motion.div>
          <motion.div
            ref={image2Ref}
            initial={{ opacity: 0, x: 50 }}
            animate={image2InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image src={img2} className="h-[300px] mt-40 hidden xl:block" alt="" />
          </motion.div>
        </div>
        <div className="hidden xl:flex w-1/4 absolute bottom-[610px] justify-around items-center shadow-md h-20 bg-white rounded-lg">
          <div className="flex flex-col items-center">
            <p className="flex flex-col items-center font-bold text-xl text-[#3a82a6]">
              50 +
            </p>
            <span className="font-bold">Client review</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="flex flex-col items-center font-bold text-xl text-[#3a82a6]">
              50 +
            </p>
            <span className="font-bold">Client review</span>
          </div>
        </div>
      </div>

      <div className="lg:w-2/4 text-center">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-ءم text-center md:text-3xl p-6 font-oxanium"
        >
          Our <span className="text-[#1F7099]">Story</span>
        </motion.h1>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          animate={contentInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <RichViewer content={description} />
        </motion.div>
      </div>
    </div>
  );
}