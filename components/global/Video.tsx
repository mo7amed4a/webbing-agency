"use client";
import React, { useEffect } from "react";
import Video from "next-video";
import { baseUrl } from "@/lib/axios";

export default function VideoApp({ url }: { url: string }) {
  const [VideoUrl, setVideoUrl] = React.useState(url);
  useEffect(() => {
    const fullUrl = baseUrl + url;
    fetch(fullUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res; // أو استخدم res.arrayBuffer() حسب الحاجة
      })
      .then((blob) => {
        // const videoObjectUrl = URL.createObjectURL(blob);
        console.log(blob.url);
        setVideoUrl(blob.url);
      })
      .catch((err) => console.error("Error fetching video:", err));
  }, []);

  return <div className="rounded-xl overflow-hidden shadow-xl border-none bg-transparent">
    {VideoUrl && <Video preload="auto"
    src={VideoUrl} />}
    </div>;
}
