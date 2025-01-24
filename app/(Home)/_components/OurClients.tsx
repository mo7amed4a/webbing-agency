"use client";
import { CustomCarousel } from "@/components/CustomCarousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurClient = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  const slides = [
    {
      img: "/assets/user.png",
      title: "Ahmed Nabil",
      description:
        "This development team exceeded our expectations. Their professionalism and attention to detail ensured that our website was delivered on time and looked fantastic.",
    },
    {
      img: "/assets/user.png",
      title: "Fatma Al-Qahtani",
      description:
        "The team was extremely supportive throughout the entire process. Their post-delivery support made sure everything worked perfectly.",
    },
    {
      img: "/assets/user.png",
      title: "Mohamed Khalil",
      description:
        "From start to finish, the experience was seamless. The developers understood our needs and delivered a website that exceeded our expectations.",
    },
    {
      img: "/assets/user.png",
      title: "Aisha Al-Mutairi",
      description:
        "I’m truly impressed by the quality of work delivered by this team. Their follow-up after project completion was highly appreciated.",
    },
    {
      img: "/assets/user.png",
      title: "Youssef Saeed",
      description:
        "The professionalism and dedication of this team are unmatched. They ensured our project was completed with precision and care.",
    },
    {
      img: "/assets/user.png",
      title: "Noura Al-Faisal",
      description:
        "Their post-project support is incredible. They were always available to answer our questions and provide assistance when needed.",
    },
    {
      img: "/assets/user.png",
      title: "Karim Abdelrahman",
      description:
        "This company delivers exceptional work. Their expertise and commitment to excellence are evident in the final product.",
    },
    {
      img: "/assets/user.png",
      title: "Latifa Al-Harbi",
      description:
        "Amazing service! The team kept us updated during the project and followed up after delivery to ensure everything was perfect.",
    },
    {
      img: "/assets/user.png",
      title: "Hassan Ebrahim",
      description:
        "It was a pleasure working with this team. They made the entire process stress-free and delivered a website we’re proud of.",
    },
    {
      img: "/assets/user.png",
      title: "Mona Al-Otaibi",
      description:
        "I highly recommend this company for web development. Their dedication and post-delivery support are truly remarkable.",
    },
  ];

  return (
    <div className="w-full h-[500px]">
      <div className="container mx-auto">
        <div className="p-[30px] text-center lg:text-left">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-xxl font-thin font-oxanium md:text-5xl text-3xl mb-3"
          >
            What our{" "}
            <span className="text-[#1F7099] text-xxl font-oxanium">Clients</span>{" "}
            say?
          </motion.h1>
        </div>

        <div>
          <div>
            <CustomCarousel>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="md:basis-2/4 ps-11">
                  <Card className="flex">
                    <CardHeader className="p-4">
                      <Avatar>
                        <AvatarImage src={slide.img} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </CardHeader>
                    <CardContent className="p-4">
                      <h1 className="text-black text-2xl mb-2">{slide.title}</h1>
                      <div className="flex mb-4">⭐⭐⭐⭐⭐</div>
                      <p className="text-gray-600 font-thin">{slide.description}</p>
                      <p className="text-gray-600 font-thin">{slide.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CustomCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;