import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MISCHIEFS } from "@/app/constants";

export const Mischiefs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div id="mischiefs" className="py-16 scroll-mt-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Mischiefs</h1>
        <div className="flex justify-center">
          <MischiefsSlider isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};

const MischiefsSlider = ({ isMobile }) => {
  // Clone the first and last slides
  const slides = [
    MISCHIEFS[MISCHIEFS.length - 1], // Clone of last slide
    ...MISCHIEFS,
    MISCHIEFS[0], // Clone of first slide
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start at the first real slide
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

  // Re-enable transition after resetting without animation
  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  const handleTransitionEnd = () => {
    if (currentImageIndex === slides.length - 1) {
      // Reached clone of first slide
      setTransitionEnabled(false);
      setCurrentImageIndex(1); // Reset to first real slide
    } else if (currentImageIndex === 0) {
      // Reached clone of last slide
      setTransitionEnabled(false);
      setCurrentImageIndex(slides.length - 2); // Reset to last real slide
    }
    setIsAnimating(false);
  };

  const containerWidth = isMobile ? "97vw" : "1000px";
  const imageWidth = isMobile ? window.innerWidth * 0.8 : 400; // In pixels
  const imageHeight = isMobile ? 262 : 262; // In pixels
  const gapValue = 16; // In pixels

  return (
    <div className="relative">
      <div
        className="relative overflow-hidden rounded-xl"
        style={{
          width: containerWidth,
          height: isMobile ? "auto" : `${imageHeight}px`,
        }}
      >
        <div
          className={`flex ${
            transitionEnabled
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${
              currentImageIndex * (imageWidth + gapValue)
            }px)`,
            gap: `${gapValue}px`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={`${slide.image}-${index}`}
              className="flex-shrink-0 rounded-xl overflow-hidden"
              style={{ width: `${imageWidth}px` }}
            >
              <div className="relative" style={{ height: `${imageHeight}px` }}>
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
