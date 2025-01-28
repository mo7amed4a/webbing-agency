import { ServiceType } from "@/app/(Home)/_components/servises";
import Link from "next/link";
import React from "react";

export default function ServicesBar({
    services,
    projectsSlug
}: {
    services: ServiceType[],
    projectsSlug: string
}) {
  return (
    <div className=" container mx-auto">
      {/* <ScrollArea className="w-full px-4"> */}
        <ul className="w-full flex flex-wrap text-[#b0a8a8] pt-5 gap-3">
          <Link href="/projects" className={`bg-white font-bold text-nowrap border p-2 ${!projectsSlug ? 'border-primary text-primary rounded-md' : ''}`}>
            All
          </Link>
          {services &&
            services.map((service: ServiceType) => (
            <Link href={`/projects?projects=${service.slug}`} key={service.slug} className={`text-nowrap bg-white rounded-md p-2 ${service.slug === projectsSlug ? 'border-2 border-primary text-primary rounded-md p-2' : ''}`}>
              {service.title} 
              {projectsSlug === service.slug}
            </Link>
            ))}
        </ul>
        {/* <ScrollBar orientation="horizontal" /> */}
      {/* </ScrollArea> */}
    </div>
  );
}
