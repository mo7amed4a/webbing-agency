import React from "react";

export default function Ourvalues() {
  return (
    <div className="bg-[#eff6ff]">
      <div className="p-24">
        <div className="flex">
          <div className="w-full mx-auto relative flex items-center justify-around overflow-hidden gap-8">
            <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] border-t-2 border-dashed border-gray-400"></div>
            <div className="relative hidden lg:flex  bg-[#3a82a6]  items-center justify-center w-20 h-20 rounded-full z-10">
              <p className="text-white font-bold text-xl">1</p>
            </div>

            <div className="relative hidden lg:flex   bg-[#3a82a6]  items-center justify-center w-20 h-20 rounded-full z-10">
              <p className="text-white font-bold text-xl">2</p>
            </div>

            <div className="relative hidden lg:flex   bg-[#3a82a6]  items-center justify-center w-20 h-20 rounded-full z-10">
              <p className="text-white font-bold text-xl">3</p>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-8 lg:gap-0 justify-around">
          <div className="text-center">
            <p className="font-bold mb-3">Innovation & Excellence</p>
            <span className="text-[#929497]">
              We are driven by creativity and <br /> a commitment to quality.
              Every <br />
              project we undertake is an <br /> opportunity to craft unique,{" "}
              <br />
              cutting-edge solutions that exceed <br /> expectations and <br />{" "}
              inspire success.
            </span>
          </div>

          <div className="text-center">
            <p className="font-bold mb-3">Innovation & Excellence</p>
            <span className="text-[#929497]">
              We are driven by creativity and <br /> a commitment to quality.
              Every <br />
              project we undertake is an <br /> opportunity to craft unique,{" "}
              <br />
              cutting-edge solutions that exceed <br /> expectations and <br />{" "}
              inspire success.
            </span>
          </div>

          <div className="text-center">
            <p className="font-bold mb-3">Innovation & Excellence</p>
            <span className="text-[#929497]">
              We are driven by creativity and <br /> a commitment to quality.
              Every <br />
              project we undertake is an <br /> opportunity to craft unique,{" "}
              <br />
              cutting-edge solutions that exceed <br /> expectations and <br />{" "}
              inspire success.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
