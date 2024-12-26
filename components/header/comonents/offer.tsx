"use client";
import { Badge } from "@/components/ui/badge";
import { graphql } from "@/lib/axios";
import Link from "next/link";
import React from "react";

export default function Offer() {
  const [data, setData] = React.useState<{
    text: string;
    percentage: number;
    view: boolean
  } | null>(null);
  React.useEffect(() => {
    graphql
      .post("", {
        query: `query Offer {
                offer {
                    text
                    percentage
                    view
                }
            }`,
      })
      .then((res) => {
        setData(res.data.data.offer)
        console.log(res);
        
    });
  }, []);
  return (
    data && data.view && (
        <div className="flex justify-center items-center bg-primary py-3 animate-pulse">
            <Link href="/Contactus" className="px-4 rounded-full text-gray-100 flex space-x-2 text-xl">
                <p className="font-oxanium ">{data.text}</p>
                <Badge className="tent-bold font- bg-white text-primary animate-pulse ">{data.percentage}%</Badge>
            </Link>
        </div>
    )
  );
}
