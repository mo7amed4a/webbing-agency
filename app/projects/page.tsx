import React from "react";
import HeroProjects from "./_components/Hero";
import FirstProject from "./_components/FirstProject";
import { api } from "@/lib/axios";

type TSearchParams = Promise<{
  projects: string;
}>;

export default async function Page({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const projectsParams = (await searchParams)?.projects;

  let url = `/projects?populate=*`;
  if (projectsParams) {
    url += `&filters[$and][0][services][slug][$contains]=${projectsParams}`;
  }

  const res = await api.get(url);
  const projects = res.data.data;

  return (
    <div className="container lg:max-w-[80%] mx-auto">
      <HeroProjects/>
      <FirstProject projects={projects} />
    </div>
  );
}
