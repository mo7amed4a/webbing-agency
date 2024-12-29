import React from "react";
import Heroservesies from "./_components/Heroservesies";
import { graphql } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import RichViewer from "../projects/_components/RichViewer";

export default async function Servesies({
  searchParams,
}:{
  searchParams: Promise<{filters: string}>
}) {
  const filters = (await searchParams).filters
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
  const services = res.data.data.services;

  const resTwo = await graphql.post("", {
    query: `query Services($filters: ServiceFiltersInput) {
  services(filters: $filters) {
    title
    slug
    descripton
    image {
      alternativeText
      url
    }
    details {
      description
    }
  }
}`,
variables: {
  "filters": {
    "slug" : {
      "eq": filters
    }
  },
}
  })

  const oneServices = filters ? resTwo.data.data.services[0] : services[0];
  return (
    <div>
      <Heroservesies></Heroservesies>

      <div className="bg-[#eff6ff]">
        <div className="container lg:max-w-[85%] mx-auto grid md:grid-cols-2 lg:gap-12 md:ps-0  py-9 space-y-4">
          <div className="px-4">
            <ul className="space-y-4">
              {services.map((service: {
                title: string;
                slug: string;
                icon: { url: string };
              }, index:number) => (
                <Link href={`/Ourservises?filters=${service.slug}`} key={index} className={`flex items-center space-x-4`}>
                  <div className={` bg-white p-3 rounded-tr-3xl rounded-bl-3xl rounded-br-lg rounded-tl-lg ${(!filters && index === 0) || (filters === service.slug) ? "ring-1 ring-primary" : ""}`}>
                    <Image
                      src={ service?.icon?.url}
                      alt="icon"
                      className="w-8 h-8"
                      width={2000}
                      height={2000}
                    />
                  </div>

                  <span className={`${(!filters && index === 0) || (filters === service.slug) ? "!text-primary font-bold" : "text-gray-700"} `}>{service.title}</span>
                </Link>
              ))}
            </ul>
          </div>

          {oneServices && <div className="px-4">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">
              {oneServices.title}
            </h2>
            <p>
              <RichViewer content={oneServices.descripton} />
            </p>
            <Link
              href={`/projects?projects=${oneServices.slug}`}
              className="text-[#1f7099] hover:underline mb-4 inline-block"
            >
              Show Projects
            </Link>
            <Image
              src={oneServices?.image?.url}
              alt="Project Image"
              className="w-full h-96 object-cover mb-4 rounded-lg"
              width={1500}
              height={1500}
            />

            <div className="space-y-2 pl-5 text-gray-700">
              {oneServices?.details?.map((item: {
                description: string
              }, index: number) => (
                <p className="relative before:absolute before:size-2 before:bg-primary before:top-3 before:-translate-y-1/2 before:-left-4 before:rounded-full" key={index}>{item.description}</p>
              ))}
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}
