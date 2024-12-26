"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Offer from "./comonents/offer";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/Ourservises" },
  { name: "About", href: "/About" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/Contactus" },
];

export function HeaderApp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0">
          <Offer />
       
        <div className="container lg:max-w-[95%] flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={"/assets/imgs/logo.png"}
              width={1150}
              height={1150}
              className="h-11 w-auto"
              alt="Webbing Agency Logo"
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* قائمة الروابط - تظهر للأجهزة الكبيرة */}
          <div
            className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col p-4 font-medium bg-white shadow-md">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
