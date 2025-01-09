"use client";
import React from "react";
import Masonry from "react-masonry-css";
import "./styles.css"; // يمكن تخصيص التنسيقات هنا
import { transformDataToGalleryFormat } from "../../_components/project";


export default function MasonryGallery({
    project
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
  const breakpointColumnsObj = {
    default: 3, // عدد الأعمدة الافتراضية
    1100: 3,    // عند عرض الشاشة أقل من 1100px
    700: 3,     // عند عرض الشاشة أقل من 700px
  };

    const images = transformDataToGalleryFormat(project)

  return (
    <div className="gallery-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} className="masonry-item">
            <img src={image.src} alt={`Image ${index}`} className="masonry-img" />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
