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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <main className="flex-1 flex">
        {/* Left side - Doctor Image */}
        <div className="w-1/2 bg-stone-100">
          <div className="h-full flex items-center justify-center p-4">
            <Image
              src={doctorsImg}
              alt="Medical team of doctors"
              className="object-cover max-h-full"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-1/2 p-8 flex flex-col">
          <div className="mt-8">
            <p className="text-orange-400 font-medium mb-4">FAQS</p>
            <h1 className="text-4xl font-bold text-teal-900 mb-6">
              Consultations with Qualified doctors.
            </h1>

            {/* FAQ Accordion */}
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-2">
                  <button
                    className="flex justify-between items-center w-full text-left py-2 text-teal-800 font-medium"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    {expandedFaq === index ? (
                      <span className="text-2xl text-teal-700">-</span>
                    ) : (
                      <span className="text-2xl text-teal-700">+</span>
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="py-2 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex">
            <div className="w-1/2 bg-teal-900 p-8 text-white flex flex-col justify-center">
              <span className="text-5xl font-bold">100+</span>
            </div>
            <div className="w-1/2 bg-orange-300 p-8 text-white flex flex-col justify-center">
              <span className="text-5xl font-bold">16+</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQS;
