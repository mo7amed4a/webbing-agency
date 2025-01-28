"use client"

import type React from "react"
import { useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageModalProps {
  images: { src: string }[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        onNext()
      } else if (event.key === "ArrowLeft") {
        onPrev()
      } else if (event.key === "Escape") {
        onClose()
      }
    },
    [onNext, onPrev, onClose],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full h-full flex items-center justify-center">
        <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={onClose}>
          <X size={24} />
        </button>
        <button className="absolute left-4 text-white hover:text-gray-300" onClick={onPrev}>
          <ChevronLeft size={48} />
        </button>
        <img
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={`Image ${currentIndex}`}
          className="max-h-[90vh] max-w-[90vw] object-contain w-full"
        />
        <button className="absolute right-4 text-white hover:text-gray-300" onClick={onNext}>
          <ChevronRight size={48} />
        </button>
      </div>
    </div>
  )
}

export default ImageModal

