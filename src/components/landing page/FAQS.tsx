"use client";
import React, { useState } from "react";
import doctorsImg from "@/images/home-faq-img.jpg";
import Image from "next/image";

const FAQS = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Are telemedicine consultations available?",
      answer:
        "Yes, we offer telemedicine consultations through our secure platform for your convenience.",
    },
    {
      question: "Do you accept health insurance?",
      answer:
        "We accept most major health insurance plans. Please contact our office to verify your specific coverage.",
    },
    {
      question: "How much does a consultation cost?",
      answer:
        "Consultation costs vary depending on the specialist and service required. Please contact us for specific pricing.",
    },
  ];

  return (
    <div className="bg-[#f8f6f5] py-12 md:py-20 md:pb-35">
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-20">
          {/* Left side - Doctor Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src={doctorsImg}
                alt="Medical team of doctors"
                className="object-cover w-full"
              />
              <div className="flex justify-end absolute right-0 -bottom-15">
                <div className="md:w-[180px] text-center  md:h-auto bg-[#0A3635] p-8 text-white flex flex-col justify-center">
                  <span className="text-4xl font-bold">100+</span>
                  <span className="text-[18px]">Doctors</span>
                </div>
                <div className="md:w-[180px] text-center md:h-auto bg-[#F2AA8A] p-8 text-white flex flex-col justify-center">
                  <span className="text-4xl font-bold">16+</span>
                  <span className="text-[18px]">World Office</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 mt-24 md:mt-0">
            <p className="text-[#F2AA8A] uppercase text-xl mb-4">FAQS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A3635] mb-6">
              Consultations with Qualified doctors.
            </h1>

            {/* FAQ Accordion */}
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className=" pb-2">
                  <button
                    className="flex gap-6 items-center w-full text-left py-2 text-[#0A3635] font-medium"
                    onClick={() => toggleFaq(index)}
                  >
                    {expandedFaq === index ? (
                      <span className="text-2xl text-[#0A3635]">-</span>
                    ) : (
                      <span className="text-2xl text-[#0A3635]">+</span>
                    )}
                    <span className="font-bold md:text-[18px]">{faq.question}</span>
                  </button>
                  {expandedFaq === index && (
                    <div className="py-2 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
