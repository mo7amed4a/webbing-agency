"use client";
import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { CustomCarousel } from "@/components/CustomCarousel";
import { CarouselItem } from "@/components/ui/carousel";
import { api, baseUrl } from "@/lib/axios";
import { TeamType } from "@/types/type";
import Image from "next/image";

export default function OurTeam() {
  const [team, setTeam] = useState<TeamType[] | null>(null);
  useEffect(() => {
    api.get("/teams?populate=image&populate=technologies.logo").then((res) => {
      setTeam(res.data.data);
    });
  }, []);

  return (
    <div className="container lg:max-w-[80%] mx-auto mt-20 px-10">
      <div className="text-center">
        <h1 className="text-2xl mb-5 text-xxl font-bold font-oxanium">
          Our{" "}
          <span className="text-[#1F7099] text-xxl font-bold font-oxanium">
            Team
          </span>
        </h1>
        <h4 className="mb-5 text-xl">Meet the Minds Behind Our Innovation</h4>
      </div>

      <div className="w-full flex">
        <CustomCarousel>
          {team &&
            team.map((member) => (
              <CarouselItem
                key={member.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div>
                  <div className="w-full h-auto bg-[#EFF6FF]">
                    <Image
                      width={400}
                      height={400}
                      src={baseUrl + member?.image?.url}
                      className="w-full h-[535px] object-cover"
                      alt={member.name}
                    />
                  </div>
                  <div className="mt-4 ">
                    <h3 className="text-lg font-bold text-[#1F7099] ">
                      {member.name}
                    </h3>
                    <div className="flex gap-x-2 text-sm text-gray-600 font-medium mt-2">
                      <span className=" font-bold">Skills:</span>
                      <div className="flex gap-x-2">
                        {member?.technologies?.map((tech, index) => (
                          <span key={index}>{tech.name}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4 leading-6 prose">
                      {member.details && (
                        <BlocksRenderer content={member.details} />
                      )}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CustomCarousel>
      </div>
    </div>
  );
}
