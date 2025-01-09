"use client";
import { graphql } from "@/lib/axios";
import { useState, useEffect } from "react";
import ServicesSlider from "./ServicesSlider";

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
      <div className="relative container lg:max-w-[80%] mx-auto px-4">
        <h1 className="text-center p-6 font-thin mb-5 font-oxanium text-5xl  ">
          Our <span className="text-[#1F7099] ">Services</span>
        </h1>
        {/* <div className="flex flex-col lg:flex-row container gap-6 mx-auto mt-16"> */}
          <ServicesSlider services={services} />
        {/* </div> */}
      </div>
    )
  );
}
