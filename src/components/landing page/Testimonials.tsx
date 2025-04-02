"use client";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mary Johnson",
      position: "Student",
      image: "/api/placeholder/80/80",
      text: "Great experience, caring doctors, and modern, caring doctors, and modern. Highly doctors and compassionate skilled doctors and compassionate staff.",
    },
    {
      id: 2,
      name: "John Doe",
      position: "CEO of Digital Marketing",
      image: "/api/placeholder/80/80",
      text: "Highly doctors and compassionate skilled doctors and compassionate staff. Highly doctors and compassionate skilled doctors and compassionate staff.",
    },
    {
      id: 3,
      name: "Robert Lee",
      position: "Accountant",
      image: "/api/placeholder/80/80",
      text: "Top-notch healthcare with a patient-centered healthcare with a approach healthcare Top-notch healthcare with a patient-centered healthcare with a approach",
    },
    {
      id: 4,
      name: "Robert Lee",
      position: "Accountant",
      image: "/api/placeholder/80/80",
      text: "Top-notch healthcare with a patient-centered healthcare with a approach healthcare Top-notch healthcare with a patient-centered healthcare with a approach",
    },
    {
      id: 5,
      name: "Robert Lee",
      position: "Accountant",
      image: "/api/placeholder/80/80",
      text: "Top-notch healthcare with a patient-centered healthcare with a approach healthcare Top-notch healthcare with a patient-centered healthcare with a approach",
    },
    {
      id: 6,
      name: "Robert Lee",
      position: "Accountant",
      image: "/api/placeholder/80/80",
      text: "Top-notch healthcare with a patient-centered healthcare with a approach healthcare Top-notch healthcare with a patient-centered healthcare with a approach",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 bg-teal-900 py-12 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Testimonial Header */}
          <div className="mb-10">
            <p className="text-orange-300 font-medium uppercase tracking-wider">
              TESTIMONIAL
            </p>
            <h2 className="text-4xl font-bold text-white mt-2">
              What Patients Say About Us.
            </h2>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${(activeSlide * 100) / 3}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="bg-white p-6 rounded h-full">
                      <div className="flex items-center mb-4">
                        <img
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
                      <p className="text-gray-600">{testimonial.text}</p>
                      <div className="h-1 w-full bg-orange-200 mt-4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full ${
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
