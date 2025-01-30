import React from "react";
import Image from "next/image";
import { graphql } from "@/lib/axios";
import { redirect } from "next/navigation";
import RichViewer from "../_components/RichViewer";

import { FiSmartphone } from "react-icons/fi";
import VideoApp from "@/components/global/Video";
import MasonryGallery from "./_components/images";

const Projectdetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const res = await graphql.post("", {
    query: `query Projects($filters: ProjectFiltersInput) {
  projects(filters: $filters) {
    title
    description
    desc
    slug
     web {
      images {
        alternativeText
        url
      }
      dashboard {
        alternativeText
        url
      }
      web {
        alternativeText
        url
      }
    }
    mobile {
      images {
        alternativeText
        url
      }
    }
    vedio {
      alternativeText
      url
    }
    cover {
      alternativeText
      url
    }
    color
    services {
      title
      image {
        alternativeText
        url
      }
      icon {
        alternativeText
        url
      }
      technologies {
        name
        logo {
          alternativeText
          url
        }
      }
    }
  }
}
`,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
    },
  });

  if (res.data.data.projects.length === 0) {
    redirect("/");
  }

  const project = res.data.data.projects[0];

  return (
    <div className="-mt-10">
      <div
        className="w-full h-screen bg-cover bg-center mt-10 relative"
        style={{ backgroundImage: `url(${project.cover?.url || '/assets/imgs/adelbaba.png' })`}}
      >
        <div className="flex flex-col justify-center items-start space-y-2 absolute top-1/2 left-8 transform -translate-y-1/2 p-4">
          <h2 className="text-4xl md:text-7xl font-bold [text-shadow:_0_1px_0_var(--tw-shadow-color)]"
              style={{color: project.color || "#f3b852"}}
            >
            {project.title}
          </h2>
          <p className="text-white text-4xl [text-shadow:_0_1px_0_var(--tw-shadow-color)] lg:w-2/4 text-wrap">
            <RichViewer content={project.desc} />
          </p>
        </div>

        <div
          className="hidden h-full absolute bottom-0 right-0 w-[657px] z-10 rounded-tl-[180px] rounded-bl-[180px] md:flex flex-col items-start justify-center gap-8 p-8"
          style={{ backgroundColor: "hsla(198, 35%, 44%, 0.9)" }}
        >
          <h1 className="text-4xl text-center font-oxanium font-thin lg:ms-8 bg-gradient-to-b from-[#71a2b7] to-[#ffffff] bg-clip-text text-transparent">
            Services Offered
          </h1>

          {project.services?.length > 0 ? (
            project.services.map(
              (service: {
                id: number;
                title: string;
                icon: { url: string };
              }) => (
                <div
                  key={service.id}
                  className="flex gap-4 items-center lg:ms-8"
                >
                  {service.icon && service.icon.url ? (
                    <Image
                      src={`${service.icon.url}`}
                      alt="Service"
                      width={200}
                      height={200}
                      className="w-12 h-12"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200"></div>
                  )}
                  <h2 className="text-2xl text-white font-light">
                    {service.title || "No Title"}
                  </h2>
                </div>
              )
            )
          ) : (
            <p className="text-white">No services available.</p>
          )}
        </div>
      </div>

      <div className="mt-7 container mx-auto">
        <h1 className="text-center text-2xl font-semibold p-6 mb-5 text-xxl font-oxanium">
          Client <span className="text-[#1F7099]">Needs and Our</span> Solutions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {["😊", "💼", "📋", "💳", "📱", "🎟️"].map((icon, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl">{icon}</div>
              <h3 className="font-semibold text-lg mt-3">
                {
                  [
                    "User-Friendly Interface",
                    "Centralized Management",
                    "Customizable Subscription Plans",
                    "Secure Payment Integration",
                    "Mobile Accessibility",
                    "Dispute Customer Support Tools",
                  ][index]
                }
              </h3>
              <p className="text-gray-600 mt-2">
                {
                  [
                    "A clean, intuitive design for an app and website that simplifies navigation, allowing users to manage products, orders, and reports with ease.",
                    "2 dashboards, one for suppliers and the other for the owner of the project that consolidates all aspects of business operations.",
                    "Flexible subscription options that allow suppliers to choose features that best fit their business needs and scale their usage as they grow.",
                    "Reliable and secure payment processing options that facilitate quick and safe transactions for suppliers and customers alike.",
                    "A responsive design or mobile app that allows users to manage their operations on-the-go, ensuring they can access vital information and perform tasks from any device.",
                    "Built-in tools for handling disputes, such as a ticketing system for customer complaints or inquiries, ensuring that issues are resolved efficiently and improving customer satisfaction.",
                  ][index]
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#eff6ff] mt-6 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-10 font-oxanium">
            Technologies <span className="text-[#1F7099]">and</span> Tools
          </h2>
          {project.services?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.services.map(
                (
                  service: {
                    technologies: {
                      name: string;
                      logo: {
                        url: string;
                      }[];
                    }[];
                    title: string;
                  },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg px-10 py-4"
                  >
                    <h3 className="text-xl font-bold mb-4">
                      {service.title || "No Title"}
                    </h3>
                    <ul className="space-y-2">
                      {service.technologies?.length > 0 ? (
                        service.technologies.map(
                          (
                            tech: {
                              name: string;
                              logo: {
                                url: string;
                              }[];
                            },
                            techIndex: number
                          ) => (
                            <li
                              key={techIndex}
                              className="flex items-center gap-x-2"
                            >
                              <Image
                                src={tech?.logo[0]?.url}
                                width={500}
                                height={500}
                                alt=""
                                className="w-4 h-4 ml-2"
                              />
                              <span>{tech.name || "No Name"}</span>
                            </li>
                          )
                        )
                      ) : (
                        <li className="text-gray-500">
                          No technologies available.
                        </li>
                      )}
                    </ul>
                  </div>
                )
              )}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              No services or technologies available.
            </p>
          )}
        </div>
      </div>

      <div className="text-center mt-9">
        <h1 className="text-3xl font-semibold mb-5 font-oxanium">
          Project <span className="text-[#1F7099] font-bold">Details</span>
        </h1>
        <p className="text-lg font-bold mt-2">{project.title}</p>
      </div>

      <div className="prose text-wrap my-10 text-center container lg:max-w-[85%] mx-auto">
        <RichViewer content={project.description} />
      </div>

      <div className="py-10 px-4 lg:px-32 bg-[#f9fafb]">
        <div className="relative">
          <div className="transition-all duration-500 ease-in-out">
            <div className="flex flex-col lg:flex-row"></div>

            <div className="mt-9">
              <div className="text-center">
                <h1 className="text-2xl font-semibold mb-5 text-xxl font-oxanium">
                  Project{" "}
                  <span className="text-[#1F7099] text-xxl font-bold font-oxanium">
                    Details
                  </span>
                </h1>
                <p className="text-lg font-bold mt-2">1. Mobile App</p>
              </div>

             
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[130rem] px-4 mx-auto flex flex-col lg:flex-row items-center justify-between gap-32 relative lg:px-10 py-10">
                <div className="mw-80 rounded-xl overflow-hidden">
                  {project.vedio && (
                    <div className="flex h- justify-center items-center my-8 sm:my-10 lg:my-12 w-full">
                      <div className="w-full sm:w-80 md:w-96 lg:w-[480px]  xl:w-[480px]">
                        {project.vedio.url && (
                          <VideoApp url={project.vedio.url} />
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center justify-center relative">
                  <div className="w-48 h-48 rounded-full flex flex-col items-center justify-center bg-white shadow-[0_0_8px_2px_rgba(59,130,246,0.2)]">
                    <FiSmartphone className="text-[#1f7099] text-6xl mb-2" />
                    <span className="text-2xl font-semibold text-[#1f7099]">
                      40+
                    </span>
                    <p className="text-2xl font-semibold text-[#1f7099] text-center">
                      Screens
                    </p>
                  </div>
                </div>

                <div className="dw-80 rounded-xl overflow-hidden">
                  {/* <Image
                    src={"/assets/imgs/image (47).png"}
                    alt="Project Image 2"
                    className="w-full h-auto object-cover"
                    width={200}
                    height={2000}
                  /> */}
                  <div className="w-[80%]">
                    <MasonryGallery project={project} />
                  </div>
                </div>

                {/* <div className="absolute top-16">
                  <p className="text-center mt-14 text-black font-semibold text-lg">
                    Try me
                  </p>
                </div> */}
              </div>
    </div>
  );
};

export default Projectdetails;
