"use client";
import RichViewer from "@/app/projects/_components/RichViewer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { graphql } from "@/lib/axios";
import Link from "next/link";
import { useState, useEffect } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(true);

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

  useEffect(() => {
    if (window.innerWidth >= 1024 && services) {
      const interval = setInterval(() => {
        setIsFading(false);
        setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
          setIsFading(true);
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [services?.length]);

  return (
    services && (
      <div className="relative container lg:max-w-[80%] mx-auto px-4">
        <h1 className="text-center p-6 font-thin mb-5 font-oxanium text-5xl  ">
          Our <span className="text-[#1F7099] ">Services</span>
        </h1>

        <div
          className={`absolute hidden lg:flex items-center h-[300px] top-[30%] left-[50%] transform -translate-x-1/2 bg-white p-10 lg:p-14 rounded-xl z-10 max-w-[500px] shadow-[0px_0px_16px_0px_#1963B966] transition-opacity duration-500 ease-in-out ${
            isFading ? "opacity-100" : "opacity-0"
          }`}
        >
          <Avatar className="size-16 me-4">
            <AvatarImage src={services[activeIndex].icon.url} />
            <AvatarFallback>WA</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">
              {services[activeIndex].title}
            </h3>
            <p className="text-gray-600 leading-6 mb-4 max-w-[400px] line-clamp-3">
              <RichViewer content={services[activeIndex].descripton} />
            </p>
            <Link
              href={services[activeIndex].slug}
              className="underline text-[#1F7099] "
            >
              Show Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row container gap-6 mx-auto mt-16">
          {services.map((service, index) => (
            <div
              key={index + 4}
              className={`flex flex-col w-full lg:w-[700px] items-center lg:flex-row lg:items-start`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="p-6 h-[250px] w-full bg-white border border-gray-200 rounded-xl shadow-[0px_0px_16px_0px_#1963B966] text-black flex items-center cursor-pointer">
                <Avatar className="size-16 me-4">
                  <AvatarImage src={service.icon.url} />
                  <AvatarFallback>WA</AvatarFallback>
                </Avatar>
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-700 line-clamp-2 text-wrap">
                    <RichViewer content={service.descripton} />
                  </p>
                  <Link
                    href={`/projects?projects=${service.slug}`}
                    className="underline text-[#1F7099] "
                  >
                    Show Projects
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
