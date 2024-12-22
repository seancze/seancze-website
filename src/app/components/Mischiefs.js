"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MISCHIEFS } from "@/app/constants";

export const Mischiefs = () => {
  return (
    <div id="mischiefs" className="py-16 scroll-mt-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Mischiefs</h1>
        <div className="flex justify-center">
          <MischiefsSlider />
        </div>
      </div>
    </div>
  );
};

const MischiefsSlider = () => {
  const slides = [
    MISCHIEFS[MISCHIEFS.length - 1], // Clone of last slide
    ...MISCHIEFS,
    MISCHIEFS[0], // Clone of first slide
  ];
  // start at the first real slide (index 0 belongs to the clone of the last slide)
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTransitionEnabled(true);
    setCurrentImageIndex((prev) => prev + 1);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTransitionEnabled(true);
    setCurrentImageIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextImage();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, isAnimating]);

  useEffect(() => {
    // re-enable transition after resetting without animation
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  const handleTransitionEnd = () => {
    if (currentImageIndex === slides.length - 1) {
      // if we reach the clone of first slide, reset to the first real slide
      setTransitionEnabled(false);
      setCurrentImageIndex(1);
    } else if (currentImageIndex === 0) {
      // if we reach clone of last slide, reset to the last real slide
      setTransitionEnabled(false);
      setCurrentImageIndex(slides.length - 2);
    }
    setIsAnimating(false);
  };

  return (
    <div className="w-full">
      <div className={`relative overflow-hidden rounded-xl h-64`}>
        <div
          className={`flex gap-4 ${
            transitionEnabled
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{
            // we use 25rem because image width is w-64 (24rem) and gap is gap-4 (1rem)
            // hence, this helps us to move by 1 image at a time
            transform: `translateX(-${currentImageIndex * 25}rem)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={`${slide.image}-${index}`}
              className={`flex-shrink-0 rounded-xl overflow-hidden w-96`}
            >
              <div className={`relative h-64`}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index <= 2}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevImage}
          disabled={isAnimating}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow-md transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        >
          <FaChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={nextImage}
          disabled={isAnimating}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow-md transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        >
          <FaChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Mischiefs;
