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
// import { useInView } from "react-intersection-observer";

export default function Project({
  project,
}: {
  project: {
    title: string;
    slug: string;
    desc: [];
    services: { title: string; documentId: string }[];
    description: [];
    web: { 
      web: {
        url: string
        alternativeText: string
      }
      images: {
        url: string
        alternativeText: string
      }[]
      dashboard: {
        url: string
        alternativeText: string
      }
     };
    mobile: {
      images: {
        url: string
        alternativeText: string
      }[]
    }
  };
}) {
  // const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const images = transformDataToGalleryFormat(project);

  return (
    <div className="p-4 space-y-4 mt-40">
      <Card className="overflow-hidden bg-white shadow-lg rounded-3xl p-8 lg:grid lg:grid-cols-2">
        {/* Header Section */}
        <Link href={`/projects/${project.slug}`}  className="flex flex-col justify-center">
          <div>
            <div className="space-y-2 mb-6">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <p className="text-gray-600 line-clamp-6">
                {project?.desc && <RichViewer content={project?.desc} />}
              </p>
            </div>
          </div>

          {/* Device Frame with Carousel */}
          <div
            className="relative rounded-[2.5rem] p-4 mb-8 md:hidden"
          >
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
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2" />
            </Carousel>
          </div>

          {/* Services Section */}
          <div
            className="space-y-4 mb-8"
          >
            <span className="text-primary">Services Offered: </span>
            {project.services.map(
              (service: { title: string; documentId: string }) => (
                <span key={service.documentId}>{service.title},</span>
              )
            )}
          </div>

          {/* Project Description */}
          <div
            className="space-y-4"
          >
            <div className="text-muted-foreground text-lg flex flex-wrap">
              <span className="text-primary">Project Description: </span>
              <p className="line-clamp-6">
                {project?.description && (
                  <RichViewer content={project?.description} />
                )}
              </p>
              <Link
                href={`/projects/${project.slug}`}
                className="text-primary hover:underline inline-block"
              >
                Show Full Project
              </Link>
            </div>
            
          </div>
        </Link>

        {/* Images Section */}
        {project.web && <section
        >
          <CardContent className="p-4 6 hidden md:block">
            <div className="grid grid-cols-2 gap-4 items-center h-full">
              <ScrollArea className="lg:h-[32rem]">
                {project?.web?.web && (
                  <div className="w-full h-auto sm:mr-8">
                    <Image
                      width={400}
                      height={400}
                      className="w-full h-auto object-contain lg:border rounded-lg"
                      src={project?.web?.web.url}
                      alt={project?.web?.web?.alternativeText}
                    />
                  </div>
                )}
              </ScrollArea>
              <div className="grid items-center gap-4">
                <div className="w-full flex h-full gap-4">
                  {project?.web?.images &&
                    project?.web?.images?.map((e, index) => (
                      <ScrollArea key={index} className="h-64 w-full even:!mt-10">
                        <Image
                          width={400}
                          height={400}
                          className="w-full h-auto rounded-lg"
                          src={e.url}
                          alt={e.alternativeText}
                        />
                      </ScrollArea>
                    ))}
                </div>
                {project?.web?.dashboard && (
                  <ScrollArea className="h-64">
                    <Image
                      width={400}
                      height={400}
                      className="w-full sm:w-full h-auto rounded-lg"
                      src={project?.web?.dashboard.url}
                      alt={project?.web?.dashboard.alternativeText}
                    />
                  </ScrollArea>
                )}
              </div>
            </div>
          </CardContent>
        </section>}
        {
          project.mobile &&  
          <div className="md:grid items-center gap-4 hidden">
          <div className="w-full flex h-full gap-4">
            {project?.mobile?.images &&
              project?.mobile?.images?.map((e, index) => (
                <ScrollArea key={index} className="h-full w-full even:!mt-10">
                  <Image
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    src={e.url}
                    alt={e.alternativeText}
                  />
                </ScrollArea>
              ))}
          </div>
        </div>
        }
      </Card>
    </div>
  );
}

export function transformDataToGalleryFormat(data: any) {
  const images = [];

  const getImageObject = (image: any) => ({
    src: image.url,
    width: 320, // يمكنك تعديل العرض حسب الحاجة
    height: 180, // يمكنك تعديل الارتفاع حسب الحاجة
    alt: image.alternativeText || "No description available",
  });

  // إضافة صور الويب من المصفوفة web.images
  if (data.web?.images?.length) {
    images.push(...data.web.images.map(getImageObject));
  }

  // إضافة صورة web.web
  if (data.web?.web) {
    images.push(getImageObject(data.web.web));
  }

  // إضافة صورة web.dashboard
  if (data.web?.dashboard) {
    images.push(getImageObject(data.web.dashboard));
  }

  // إضافة صورة الموبايل
  if (data.mobile) {
    images.push(...data.mobile.images.map(getImageObject));
  }

  return images;
}
