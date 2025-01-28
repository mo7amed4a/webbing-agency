import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { graphql } from "@/lib/axios";
import React from "react";

interface ServicesContactProps {
  setFieldValue: (field: string, value: any) => void;
}

export default function ServicesContact({ setFieldValue }: ServicesContactProps) {
  const [data, setData] = React.useState<{ title: string }[] | null>(null);

  React.useEffect(() => {
    graphql
      .post("", {
        query: `query Services {
          services {
            title
          }
        }`,
      })
      .then((res) => {
        setData(res.data.data.services);
      });
  }, []);

  return (
    <RadioGroup name="subject" className="flex flex-wrap gap-4" onValueChange={(value) => setFieldValue("subject", value)}>
      {data &&
        data.map((subject, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem className="bg-[#D4CACA] border-none size-3.5 p-0" value={subject.title} id={`subject-${index}`} />
            <Label htmlFor={`subject-${index}`} className="cursor-pointer">{subject.title}</Label>
          </div>
        ))}
    </RadioGroup>
  );
}
