"use client";
import React, { useState, useEffect } from "react";
import testimonialImg from "@/images/author-4.jpg";
import Image from "next/image";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mary Johnson",
      position: "Student",
      image: testimonialImg,
      text: "Great experience, caring doctors, and modern, caring doctors, and modern. Highly doctors and compassionate skilled doctors and compassionate staff.",
    },
    {
      id: 2,
      name: "John Doe",
      position: "CEO of Digital Marketing",
      image: testimonialImg,
      text: "Highly doctors and compassionate skilled doctors and compassionate staff. Highly doctors and compassionate skilled doctors and compassionate staff.",
    },
    {
      id: 3,
      name: "Robert Lee",
      position: "Accountant",
      image: testimonialImg,
      text: "Top-notch healthcare with a patient-centered healthcare with a approach healthcare Top-notch healthcare with a patient-centered healthcare with a approach",
    },
    {
      id: 4,
      name: "Robert Lee",
      position: "Accountant",
      image: testimonialImg,
      text: "Top-notch healthcare with a patient-centered healthcare with a approach healthcare Top-notch healthcare with a patient-centered healthcare with a approach",
    },
    {
      id: 5,
      name: "Robert Lee",
      position: "Accountant",
      image: testimonialImg,
      text: "Top-notch healthcare with a patient-centered healthcare with a approach healthcare Top-notch healthcare with a patient-centered healthcare with a approach",
    },
    {
      id: 6,
      name: "Robert Lee",
      position: "Accountant",
      image: testimonialImg,
      text: "Top-notch healthcare with a patient-centered healthcare with a approach healthcare Top-notch healthcare with a patient-centered healthcare with a approach",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };
  const dotsIndicator = testimonials.length - 2;

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to detect screen size
  let screenSize = "";
  function getScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(`Width: ${width}px, Height: ${height}px`);

    // You can specify different actions based on screen size
    if (width < 768) {
      console.log("Screen is small (mobile or tablet).");
      screenSize = `translateX(-${(activeSlide * 100) / 1}%)`;
    } else if (width >= 768 && width < 1024) {
      console.log("Screen is medium (tablet in landscape or small desktop).");
      screenSize = `translateX(-${(activeSlide * 100) / 2}%)`;
    } else {
      console.log("Screen is large (desktop).");
      screenSize = `translateX(-${(activeSlide * 100) / 3}%)`;
    }
  }

  // Detect screen size on initial load
  if (typeof window !== "undefined") {
    getScreenSize();

    window.addEventListener("resize", getScreenSize);
  }

  // Detect screen size on window resize

  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main
        style={{
          background: "linear-gradient(to bottom, #0A3635 50%,  #FDF5F2 50%)",
        }}
        className="flex-1 h-[300px] px-5 md:px-10 py-12 pb-10"
      >
        <div className="w-full">
          {/* Testimonial Header */}
          <div className="mb-8 md:mb-10">
            <p className="text-[#F2AA8A] md:text-xl mb-4 font-medium uppercase tracking-wider">
              TESTIMONIAL
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
              What Patients Say About Us.
            </h2>
          </div>
          {/* Testimonial Slider */}

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex md:gap-10 transition-transform duration-500 ease-in-out"
                style={{
                  transform: screenSize,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full md:w-[390px]  flex-shrink-0"
                  >
                    <div className="bg-white border border-[#F2AA8A] p-5 md:p-8 rounded h-full">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-800">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-500">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-500 mt-10 text-sm md:text-[16px] leading-8">{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array(dotsIndicator)
                .fill(0)
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-4 h-4 rounded-full ${
                      index === activeSlide ? "bg-orange-300" : "bg-teal-800"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;
