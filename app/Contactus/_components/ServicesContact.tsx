import { graphql } from "@/lib/axios";
import { Field } from "formik";
import React from "react";

export default function ServicesContact() {
  const [data, setData] = React.useState<{title:string}[] | null>(null);
  React.useEffect(()=> {
    graphql.post('', {
      query: `query Services {
        services {
          title
        }
      }`,
    }).then((res) => {
      setData(res.data.data.services)
    })
  }, [])
  return (
    <div className="flex flex-wrap gap-4">
      {data && data.map((subject: { title: string }, index: number) => (
        <label key={index} className="flex items-center">
          <Field type="radio" name="subject" value={subject.title} className="mr-2" />
          {subject.title}
        </label>
      ))}
    </div>
  );
}
