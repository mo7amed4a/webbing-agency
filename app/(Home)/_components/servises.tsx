"use client";
import { graphql } from "@/lib/axios";
import { useState, useEffect } from "react";
import ServicesSlider from "./ServicesSlider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type ServiceType = {
  title: string;
  icon: {
    alternativeText: string;
    url: string;
  };
  descripton: [];
  slug: string;
};

export default function Services() {
  const [services, setServices] = useState<ServiceType[] | null>(null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    graphql
      .post("", {
        query: `query Services {
        services {
          title
          icon {
            alternativeText
            url
          }
          descripton
          slug
        }
      }`,
      })
      .then((res) => {
        setServices(res.data.data.services);
      });
  }, []);

  return (
    services && (
      <div className="relative container lg:max-w-[80%] mx-auto px-4 py-16">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center p-6 font-thin mb-5 font-oxanium text-5xl"
        >
          Our <span className="text-[#1F7099]">Services</span>
        </motion.h1>
        <ServicesSlider services={services} />
      </div>
    )
  );
}