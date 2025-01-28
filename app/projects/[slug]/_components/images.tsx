"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./styles.css"; // يمكن تخصيص التنسيقات هنا
import { transformDataToGalleryFormat } from "../../_components/project";
import ImageModal from "./ImageModal";


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
    const [modalOpen, setModalOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
    const openModal = (index: number) => {
      setCurrentImageIndex(index)
      setModalOpen(true)
    }
  
    const closeModal = () => {
      setModalOpen(false)
    }
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  return (
    <div className="gallery-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} className="masonry-item">
            <img src={image.src} alt={`Image ${index}`}               onClick={() => openModal(index)}
 className="masonry-img" />
          </div>
        ))}
      </Masonry>

      {modalOpen && (
        <ImageModal
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}
