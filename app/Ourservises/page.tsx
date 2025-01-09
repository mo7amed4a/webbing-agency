"use client";
import React, { useState, useEffect } from "react";
import { graphql } from "@/lib/axios";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroServices from "./_components/Heroservesies";
import Loading from "@/components/global/loading";
import Link from "next/link";

export default function Services() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch all services
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const res = await graphql.post("", {
          query: `query Services {
            services {
              title
              slug
              icon {
                alternativeText
                url
              }
              image {
                alternativeText
                url
              }
              descripton
              details {
                description
              }
            }
          }`,
        });
        const servicesData = res.data.data.services;
        setServices(servicesData);
        setSelectedService(servicesData[0]); // Default to the first service
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <HeroServices />
      <div className="bg-[#eff6ff]">
        <div className="container lg:max-w-[85%] mx-auto grid md:grid-cols-2 lg:gap-12 md:ps-0 py-9 space-y-4">
          <div className="px-4">
            <ul className="space-y-4 grid grid-cols-2 md:grid-cols-1 gap-2">
              {services.map((service: any, index: number) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 cursor-pointer`}
                  onClick={() => handleServiceClick(service)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={` bg-white p-3 rounded-tr-3xl rounded-bl-3xl rounded-br-lg rounded-tl-lg ${
                      selectedService?.slug === service.slug
                        ? "ring-1 ring-primary"
                        : ""
                    }`}
                  >
                    <Image
                      src={service?.icon?.url}
                      alt="icon"
                      className="size-6 md:size-8"
                      width={2000}
                      height={2000}
                    />
                  </motion.div>

                  <motion.span
                    className={` text-sm md:text-base ${
                      selectedService?.slug === service.slug
                        ? "!text-primary font-bold"
                        : "text-gray-700"
                    } `}
                    whileHover={{ color: "#1f7099" }}
                  >
                    {service.title}
                  </motion.span>
                </div>
              ))}
            </ul>
          </div>
          {selectedService && (
            <motion.div
              className="px-4 pt-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-base md:text-3xl text-gray-900 font-oxanium">
                  {selectedService.title}
                </h2>
                <Link href={`/projects/`} className="text-primary border-b text-sm md:text-base border-primary">
                  Show projects
                </Link>
              </div>
              <Image
                src={selectedService?.image?.url}
                alt="Project Image"
                className="object-cover mb-4 rounded-lg"
                width={2000}
                height={2000}
                style={{
                  width: "510px",
                  height: "340px",
                }}
              />

              <div className="space-y-2 pl-5 text-gray-700 text-lg">
                {selectedService?.details?.map(
                  (
                    item: {
                      description: string;
                    },
                    index: number
                  ) => (
                    <motion.p
                      className="relative before:absolute before:size-2 before:bg-primary before:top-3 before:-translate-y-1/2 before:-left-4 before:rounded-full text-wrap"
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.description}
                    </motion.p>
                  )
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
