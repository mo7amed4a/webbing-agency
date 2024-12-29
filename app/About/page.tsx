import React from "react";
import Video from "next-video";
import part from "../../public/assets/imgs/image (61).png";
import Ourstory from "./_components/Ourstory";
import Ourvalues from "./_components/Ourvalues";
import Image from "next/image";
import axios from "axios";
import { baseUrl } from "@/lib/axios";

export default async function Aboutus() {
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
      <div className="relative p-4">
        <h1 className="text-center text-[#1F7099] text-4xl p-6 mb-72 font-oxanium">
          About Us
        </h1>
        <div className="absolute -bottom-1/4 left-1/2 transform -translate-x-1/2 w-full sm:w-auto rounded-3xl overflow-hidden px-4">
          <Video
            className="lg:size-96 xl:size-[30rem] overflow-hidden rounded-3xl"
            src={about?.video?.url}
            autoPlay
            loop
            muted
          />
        </div>
        <Image src={part} className=" w-full" alt="" />
      </div>

      <Ourstory description={about?.description}></Ourstory>
      <Ourvalues></Ourvalues>
    </div>
  );
}
