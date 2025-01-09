import React from "react";
import img1 from "../../../public/assets/imgs/Image (70).png";
import img2 from "../../../public/assets/imgs/Image (71).png";
import Image from "next/image";
import RichViewer from "@/app/projects/_components/RichViewer";
export default function OurStory({ description }: { description: [] }) {
  return (
    <div className=" flex md:flex-row flex-col justify-around">
      <div>
        <div className="  flex gap-9 relative">
          <Image src={img1} className="h-[300px] mt-6 hidden xl:block" alt="" />
          <Image
            src={img2}
            className=" h-[300px] mt-40 hidden xl:block"
            alt=""
          />
        </div>
        <div className="hidden xl:flex w-1/4 absolute bottom-[610px] justify-around items-center shadow-md h-20 bg-white rounded-lg ">
          <div className="flex flex-col items-center ">
            <p className=" flex flex-col items-center font-bold text-xl text-[#3a82a6]">
              50 +
            </p>
            <span className=" font-bold">Client review</span>
          </div>
          <div className="flex flex-col items-center ">
            <p className=" flex flex-col items-center font-bold text-xl text-[#3a82a6]">
              50 +
            </p>
            <span className=" font-bold">Client review</span>
          </div>
        </div>
      </div>

      <div className="lg:w-2/4 text-center">
        <h1 className="text-ءم text-center md:text-3xl p-6  font-oxanium">
          Our <span className="text-[#1F7099] "> Story</span>
        </h1>

        <RichViewer content={description} />
      </div>
    </div>
  );
}
