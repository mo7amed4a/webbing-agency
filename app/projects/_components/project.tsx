"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import RichViewer from "./RichViewer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Project({
  project,
}: {
  project: {
    title: string;
    slug: string;
    desc: [];
    services: { title: string; documentId: string }[];
    description: [];
    screenMobile: { url: string };
    screenWeb: { url: string };
    screensMobile: {
      url: string;
    }[];
  };
}) {
  const images = transformDataToGalleryFormat(project);
  return (
    <Link href={`/projects/${project.slug}`} className="p-4 space-y-6 mt-40">
      <Card className="overflow-hidden bg-white shadow-lg rounded-3xl p-8  lg:grid lg:grid-cols-2">
        {/* Header Section */}
        <section className="flex flex-col justify-center">
          <div className="space-y-2 mb-6">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-gray-600 line-clamp-6">
              {project?.desc && (
                <RichViewer content={project?.desc} />
              )}
            </p>
            <Link
              href={`/projects/${project.slug}`}
              className="text-primary hover:underline inline-block"
            >
              Show Full Project
            </Link>
          </div>

          {/* Device Frame with Carousel */}
          <div className="relative rounded-[2.5rem] p-4 mb-8 md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="h-auto relative rounded-xl overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1700}
                        height={1700}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
                {/* Add more CarouselItems as needed */}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2" />
            </Carousel>
          </div>

          {/* Services Section */}
          <div className="space-y-4 mb-8">
            <span className="text-primary">Services Offered: </span>
            {project.services.map(
              (service: { title: string; documentId: string }) => (
                <span key={service.documentId}>{service.title},</span>
              )
            )}
          </div>

          {/* Project Description */}
          <div className="space-y-4">
            <div className="text-muted-foreground text-lg flex flex-wrap">
              <span className="text-primary">Project Description: </span>
              <p className="line-clamp-6">
                {project?.description && (
                  <RichViewer content={project?.description} />
                )}
              </p>
            </div>
          </div>
        </section>
        <section>
        <CardContent className="p-4 6">
                      <div className="grid grid-cols-2 gap-4 items-center h-full">
                        <ScrollArea className="lg:h-[32rem]">
                          {project.screenMobile && (
                            <div className="w-full h-auto sm:mr-8">
                              <Image
                                width={400}
                                height={400}
                                className="w-full h-auto object-contain lg:border rounded-lg"
                                src={project.screenMobile.url}
                                alt="Main image"
                              />
                            </div>
                          )}
                        </ScrollArea>
                        <div className="grid items-center gap-4">
                          <div className="w-full flex h-full gap-4">
                            {project.screensMobile && project.screensMobile.map((e, index) => (
                              <ScrollArea key={index} className="h-64 w-full">
                                <Image
                                  width={400}
                                  height={400}
                                  className="w-full h-auto border border-black rounded-lg"
                                  src={e.url}
                                  alt="Large bottom image"
                                />
                              </ScrollArea>
                            )
                            )}
                          </div>
                          {project.screenWeb && (
                            <ScrollArea className="h-64">
                              <Image
                                width={400}
                                height={400}
                                className="w-full sm:w-full h-auto border border-black rounded-lg"
                                src={project.screenWeb.url}
                                alt="Large bottom image"
                              />
                            </ScrollArea>
                          )}
                        </div>
                      </div>
                    </CardContent>
        </section>
      </Card>
    </Link>
  );
}

export function transformDataToGalleryFormat(data: any) {
  const { screenMobile, screensMobile, screenWeb } = data;

  const getImageObject = (image: any) => ({
    src: image.url,
    width: 320, // يمكنك تعديل العرض حسب الحاجة
    height: 180, // يمكنك تعديل الارتفاع حسب الحاجة
    alt: image.alternativeText || "No description available",
  });

  const images = [];

  // Add single screenMobile image
  if (screenMobile) {
    images.push(getImageObject(screenMobile));
  }

  // Add screensMobile array
  if (screensMobile && screensMobile.length > 0) {
    images.push(...screensMobile.map(getImageObject));
  }

  // Add single screenWeb image
  if (screenWeb) {
    images.push(getImageObject(screenWeb));
  }

  return images;
}
