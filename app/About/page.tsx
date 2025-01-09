import React from "react";
import Video from "next-video";
import part from "../../public/assets/imgs/image (61).png";
import Image from "next/image";
import axios from "axios";
import { baseUrl } from "@/lib/axios";
import OurStory from "./_components/Ourstory";
import ValuesList from "./_components/ValuesList";

export default async function AboutUs() {
  const res = await axios.post(baseUrl + "/graphql", {
    query: `query About {
  about {
    description
    video {
      alternativeText
      url
    }
  }
}`,
  });
  const { about } = res.data.data;
  return (
    <div className="relative ">
      <section className="relative">
        <div className="mt-40">
          <h1 className="text-center text-[#1F7099] text-4xl p-6 font-oxanium">
            About Us
          </h1>
        </div>
        <div className="px-4">
          <div className="mx-auto overflow-hidden -mb-40 relative z-10">
            <Video
              className="!w-96 xl:!w-[30rem] h-auto mx-auto overflow-hidden rounded-3xl"
              src={about?.video?.url}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <Image src={part} className="w-full" alt="" />
      </section>

        <section className="bg-[#eff6ff] pt-40 px-4 pb-40 space-y-10 md:space-y-32">
          <OurStory description={about?.description} />
          <ValuesList />
        </section>

    </div>
  );
}
