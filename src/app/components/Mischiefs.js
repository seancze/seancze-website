"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MISCHIEFS } from "@/app/constants";

export const Mischiefs = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Section header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-magic-gold font-halloween">
          Mischiefs
        </h2>
        <div className="mt-2 w-20 h-1 rounded bg-magic-gold" />
      </div>
      <div className="flex justify-center">
        <MischiefsSlider />
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
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [isManualControl, setIsManualControl] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [slideWidth, setSlideWidth] = useState(0);
  const intervalRef = useRef(null);
  const slideRef = useRef(null);

  // Calculate slide width including gap
  useEffect(() => {
    const updateSlideWidth = () => {
      if (slideRef.current) {
        const slide = slideRef.current.querySelector(".slide-item");
        if (slide) {
          const styles = window.getComputedStyle(slideRef.current);
          const gap = parseFloat(styles.gap) || 0;
          setSlideWidth(slide.offsetWidth + gap);
        }
      }
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const getNewImage = ({ isNext }) => {
    if (isAnimating) return;
    setIsManualControl(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsAnimating(true);
    setTransitionEnabled(true);
    if (isNext) {
      setCurrentImageIndex((prev) => prev + 1);
    } else {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const autoSlide = () => {
      if (!isAnimating) {
        setIsManualControl(true);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsAnimating(true);
        setTransitionEnabled(true);
        setCurrentImageIndex((prev) => prev + 1);
      }
    };

    if (!isManualControl) {
      intervalRef.current = setInterval(autoSlide, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentImageIndex, isAnimating, isManualControl]);

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  const handleTransitionEnd = () => {
    if (currentImageIndex === slides.length - 1) {
      setTransitionEnabled(false);
      setCurrentImageIndex(1);
    } else if (currentImageIndex === 0) {
      setTransitionEnabled(false);
      setCurrentImageIndex(slides.length - 2);
    }
    setIsAnimating(false);
  };

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const ImageSkeleton = () => (
    <div
      role="status"
      className="flex items-center justify-center h-full w-full bg-magic-bg-secondary rounded-lg animate-pulse"
    >
      <svg
        className="w-10 h-10 text-magic-gold/30"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl h-48 sm:h-56 md:h-64 lg:h-72">
        <div
          ref={slideRef}
          className={`flex gap-3 sm:gap-4 md:gap-6 ${
            transitionEnabled
              ? "transition-transform duration-300 ease-in-out"
              : ""
          }`}
          style={{
            transform: slideWidth
              ? `translateX(-${currentImageIndex * slideWidth}px)`
              : "translateX(0)",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={`${slide.image}-${index}`}
              className="flex-shrink-0 w-[calc(100vw-2rem)] sm:w-80 md:w-96 group slide-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              {/* Ornate frame container */}
              <div
                className={`
                  relative h-48 sm:h-56 md:h-64 lg:h-72 p-2 sm:p-3
                  bg-gradient-to-br from-magic-gold via-magic-amber to-magic-gold
                  rounded-lg shadow-magic-glow
                  transition-all duration-300
                  ${hoveredIndex === index ? "scale-[1.02] shadow-[0_0_30px_rgba(212,175,55,0.5)]" : ""}
                `}
              >
                {/* Inner frame */}
                <div className="relative h-full w-full overflow-hidden rounded bg-magic-bg-primary">
                  {!imagesLoaded[index] && <ImageSkeleton />}
                  {/* Image with Ken Burns effect on hover */}
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className={`
                        object-cover transition-all duration-[3000ms] ease-out
                        ${imagesLoaded[index] ? "opacity-100" : "opacity-0"}
                        ${hoveredIndex === index ? "scale-110" : "scale-100"}
                      `}
                      priority={index <= 2}
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                  {/* Magical shimmer overlay */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-tr from-transparent via-magic-gold/10 to-transparent
                      transition-opacity duration-300
                      ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
                    `}
                  />
                </div>
                {/* Decorative corner accents */}
                <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-magic-bg-primary/30 rounded-tl" />
                <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-magic-bg-primary/30 rounded-tr" />
                <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-magic-bg-primary/30 rounded-bl" />
                <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-magic-bg-primary/30 rounded-br" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons with magical styling */}
        <button
          onClick={() => getNewImage({ isNext: false })}
          disabled={isAnimating}
          className="
            absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
            w-8 h-8 sm:w-10 sm:h-10 rounded-full
            bg-magic-bg-secondary/90 text-magic-gold
            border border-magic-gold/30
            flex items-center justify-center
            shadow-magic-glow
            transition-all duration-300
            hover:bg-magic-bg-secondary hover:border-magic-gold
            disabled:opacity-50 disabled:cursor-not-allowed
            z-10
          "
        >
          <FaChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        <button
          onClick={() => getNewImage({ isNext: true })}
          disabled={isAnimating}
          className="
            absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
            w-8 h-8 sm:w-10 sm:h-10 rounded-full
            bg-magic-bg-secondary/90 text-magic-gold
            border border-magic-gold/30
            flex items-center justify-center
            shadow-magic-glow
            transition-all duration-300
            hover:bg-magic-bg-secondary hover:border-magic-gold
            disabled:opacity-50 disabled:cursor-not-allowed
            z-10
          "
        >
          <FaChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        {MISCHIEFS.slice(0, 7).map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${
                currentImageIndex === index + 1
                  ? "bg-magic-gold w-6"
                  : "bg-magic-gold/30 hover:bg-magic-gold/50"
              }
            `}
          />
        ))}
        {MISCHIEFS.length > 7 && (
          <span className="text-magic-gold-muted text-xs">...</span>
        )}
      </div>
    </div>
  );
};

export default Mischiefs;
