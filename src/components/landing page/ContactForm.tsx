import React from "react";
import { Calendar } from "lucide-react";
import contactIllustration from "@/images/contact-us-img.png";
import bgImg from "@/images/home-faq-img.jpg";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="relative w-full">
      <div className="bg-black/40 absolute top-0 left-0 right-0 bottom-0 z-5" />
      {/* Background image - Note: Using placeholder as we can't use external images */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src={bgImg}
          alt="Medical background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-full mx-3 md:mx-8 px-4 py-12">
        {/* Header section */}
        <div className="text-center mb-8">
          <p className="text-white uppercase tracking-wide font-medium">
            FILL THE FORM
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Contact Form.
          </h2>
        </div>

        {/* Two column layout */}
        <div className="flex flex-col md:flex-row">
          {/* Left column - Coral section */}
          <div className="bg-[#F2AA8A] p-5 md:p-6 md:w-1/3 flex flex-col items-center justify-center text-center">
            <div className="max-w-md">
              <Image
                src={contactIllustration}
                alt="Calendar illustration"
                className="h-48 mx-auto mb-8"
              />

              <h3 className="text-2xl md:text-3xl text-white">Make <span className="font-bold">Appointment</span> & Take Care Of Your Healthy Life</h3>
            </div>
          </div>

          {/* Right column - Form section */}
          <div className="bg-[#0A3635] p-8 md:p-12 flex-1">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded text-white placeholder-gray-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded text-white placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded text-white placeholder-gray-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded text-white placeholder-gray-300"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-white" />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded text-white placeholder-gray-300"
                ></textarea>
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full border-2 font-medium border-[#F2AA8A] text-[#F2AA8A] hover:bg-[#F2AA8A] hover:text-white transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
