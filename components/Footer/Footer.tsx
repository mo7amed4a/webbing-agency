// import logo2 from "../../assets/imgs/image (13).png";
// import call from "../../assets/imgs/call.png";
// import mail from "../../assets/imgs/image (3).png";
// import location from "../../assets/imgs/image (2).png";
// import web from "../../assets/imgs/image (5).png";
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
        <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <div className="flex gap-4 item-center">
                <Image
                  src={`/assets/imgs/call.png`}
                  width={500}
                  height={500}
                  className="w-6"
                  alt=""
                />
                <li>01024456789</li>
              </div>
              <div className="flex gap-4 item-center">
                <Image
                  src={`/assets/imgs/image (2).png`}
                  width={500}
                  height={500}
                  className="w-6"
                  alt=""
                />
                <li>81 Mohamed Mqld, Nasr City</li>
              </div>
              <div className="flex gap-4 item-center">
                <Image
                  src={`/assets/imgs/image (3).png`}
                  width={500}
                  height={500}
                  className="w-6"
                  alt=""
                />
                <li>Webbing-Agency@gmail.com</li>
              </div>
              <div className="flex gap-4 item-center">
                <Image
                  src={`/assets/imgs/image (5).png`}
                  width={500}
                  height={500}
                  className="w-6"
                  alt=""
                />
                <li>www.webbing-agency.com</li>
              </div>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
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

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Social Media
            </h3>
            <div className="flex space-x-2">
              <a href="#" className="text-gray-600 p-2 border text-primary border-primary rounded-full">
                <Linkedin className="size-4 text-current"/>
              </a>
              <a href="#" className="text-gray-600 p-2 border text-primary border-primary rounded-full">
                <Facebook className="size-4 text-current"/>
              </a>
              <a href="#" className="text-gray-600 p-2 border text-primary border-primary rounded-full">
                <Github className="size-4 text-current"/>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-4 text-center  ">
          <div className="flex justify-center ">
            <Image
              className="w-[130px] h-full"
              width={400}
              height={400}
              src={`/assets/imgs/image(13).png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
