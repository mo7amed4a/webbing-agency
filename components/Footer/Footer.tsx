import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 px-4 container lg:max-w-[95%] mx-auto">
      <Image
        className="w-[230px] py-4"
        width={500}
        height={500}
        src={`/assets/imgs/logo.png`}
        alt=""
      />
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full">
          <div className="flex flex-col space-y-4 order-2 md:order-1">
            <h3 className="md:text-lg font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-2 text-gray-600 text-xs md:text-base">
              <a href="tel:+201500382858" className="flex gap-4 item-center">
                <Image
                  src={`/assets/imgs/call.png`}
                  width={500}
                  height={500}
                  className="size-6"
                  alt=""
                />
                <li>+201500382858</li>
              </a>
              <a href="https://maps.app.goo.gl/fjJiGYv2QLVt6RsE6" className="flex gap-4 item-center">
                <Image
                  src={`/assets/imgs/image (2).png`}
                  width={500}
                  height={500}
                  className="size-7"
                  alt=""
                />
                <li>12 Ezzeldeen Taha , Tayaran Street, Nasr City  </li>
              </a>
              <a href="mailto:Info@Webbing-agency.com" className="flex gap-4 item-center">
                <Image
                  src={`/assets/imgs/image (3).png`}
                  width={500}
                  height={500}
                  className="size-6"
                  alt=""
                />
                <li>Info@Webbing-agency.com</li>
              </a>
              {/* <div className="flex gap-4 item-center">
                <Image
                  src={`/assets/imgs/image (5).png`}
                  width={500}
                  height={500}
                  className="w-6"
                  alt=""
                />
                <li>www.webbing-agency.com</li>
              </div> */}
            </ul>
          </div>
          <div className="flex flex-col space-y-4 order-1 md:order-2">
            <h3 className="md:text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li>
                <Link href={'/'} >Home</Link>
              </li>
              <li>
                <Link href={'/Ourservises'} >Services</Link>
              </li>
              <li>
                <Link href={'/About'} >About</Link>
              </li>
              <li>
                <Link href={'/projects'} >Projects</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2 order-3 mt-5 md:mt-0">
            <h3 className="text-lg font-semibold text-gray-900">
              Social Media
            </h3>
            <div className="flex gap-x-1">
              <a href="#" className="text-gray-600 p-2 border text-primary border-primary rounded-full">
                <Linkedin className="size-5 text-current"/>
              </a>
              <a href="#" className="text-gray-600 p-2 border text-primary border-primary rounded-full">
                <Facebook className="size-5 text-current"/>
              </a>
              <a href="#" className="text-gray-600 p-2 border text-primary border-primary rounded-full">
                <Github className="size-5 text-current"/>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-4 text-center  ">
          <div className="flex justify-center ">
            <Image
              className="w-[150px] py-4"
              width={300}
              height={100}
              src={`/assets/imgs/logo.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
