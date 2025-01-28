"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroServices() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div
      className="w-full relative h-[700px] bg-cover bg-center"
      style={{
        backgroundImage: `url(/assets/imgs/f8198a29ee232f0f3986656aeef8d379.png)`,
      }}
    >
      <div className="absolute flex flex-col top-0 left-0 w-full h-full bg-white bg-opacity-65 z-10 justify-center items-center text-center px-4">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl lg:text-6xl p-6 font-oxanium"
        >
          Our <span className="text-[#1F7099]">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-black mb-6"
        >
          Explore the wide range of solutions we offer to take your business to
          the next level.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href={"/Contactus"}>
            <button className="bg-gradient-to-r from-[#1f7099] to-[#a2c6d8] px-20 py-3 text-white rounded-full">
              Contact us
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}