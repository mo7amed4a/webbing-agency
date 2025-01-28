import React from "react";
import HeroProjects from "./_components/Hero";
import { graphql } from "@/lib/axios";
import Project from "./_components/project";
import ServicesBar from "./_components/ServicesBar";

type TSearchParams = Promise<{
  projects: string;
}>;

export default async function Page({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const projectsParams = (await searchParams)?.projects;

  // let url = `/projects?populate=*`;
  // if (projectsParams) {
  //   url += `&filters[$and][0][services][slug][$contains]=${projectsParams}`;
  // }

  // const res = await api.get(url);
  // const projects = res.data.data;

  const resServices = await graphql
  .post("", {
    query: `query Services {
    services {
      title
      icon {
        alternativeText
        url
      }
      descripton
      slug
    }
  }`,
  })
  const services = resServices.data.data.services.slice(0, 6)

  const resProjects = await graphql
  .post("", {
    query: `query Projects {
  projects {
    documentId
    title
    slug
    desc
    description
    services {
      title
      slug
    }
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
  }
}`,
  })
  const projects = resProjects.data.data.projects

  return (
    <div className="">
      
      <HeroProjects/>
      <section className="bg-[#EFF6FF]">
        <div className="container lg:max-w-[80%] mx-auto px-4">
          <ServicesBar services={services} projectsSlug={projectsParams}/>
          {
            projects?.map((project: any) => (
              <Project key={project.id} project={project} />
            ))
          }
        </div>
      </section>
      {/* <FirstProject projects={projects} services={services} /> */}
    </div>
  );
}
