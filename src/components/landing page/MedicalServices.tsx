import React from 'react';
import { CheckCircle, ArrowRight, FileText, ShoppingCart, Play } from 'lucide-react';
import mask from '@/images/hallway.jpg'
import hallway from '@/images/mask.jpg'
import Image from 'next/image';
import video from '@/images/vid.jpg'

const MedicalServices = () => {
  return (
    <div className="relative w-full bg-[#FDF5F2] overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-orange-50 rounded-r-full opacity-20"></div>
      
      {/* Main container */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center lg:gap-16">
        
       {/* Images section */}
       <div className="relative w-full lg:w-1/2 pt-8 lg:pt-16">
          <div className="relative z-10 flex justify-between gap-4 px-4 lg:px-8">
            <div className="w-[45%] md:w-[42%] h-[280px] lg:h-[360px] overflow-hidden rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full">
              <Image
                src={hallway}
                alt="Doctors in hallway"
                width={300}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col gap-4 w-[42%]">
              <div className="h-[280px] lg:h-[360px] overflow-hidden relative lg:top-[-60px] rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full">
                <Image
                  src={mask}
                  alt="Doctor with mask"
                  width={300}
                  height={360}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Video thumbnail */}
              <div className="w-full md:w-[130%] h-[100px] md:h-[180px] rounded-full overflow-hidden relative -mt-4 lg:-mt-8 -ml-2 lg:-ml-4">
                <Image
                  src={video}
                  alt="Doctor patient conversation"
                  width={300}
                  height={180}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-full">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <Play size={14} className="text-gray-800 ml-0.5" />
                    </div>
                    <span className="text-sm font-medium text-white">Watch Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dotted pattern */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-0 px-16 z-0">
            {Array(144).fill(null).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-300 opacity-30 rounded-full"></div>
            ))}
          </div>
        </div>
        
        {/* Right side content */}
        <div className="w-full lg:w-1/2 lg:pl-8 mt-8 md:mt-0 bg-[#FDF5F2]">
          <div className="text-[#F2AA8A] uppercase tracking-wide md:text-xl mb-2">
            About Medicalife
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0A3635] mb-6">
            Our Best Services &<br />
            Popular Treatment<br />
            Here.
          </h1>
          
          <p className="text-gray-600 mb-10">
            We take pride in offering a wide range of best-in-<br className='hidden md:block' />class medical services and popular treatments to cater to<br className='hidden md:block' /> your diverse healthcare needs.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle size={20} className="text-[#F2AA8A]" />
              <span className="font-semibold text-[#0A3635]">Mental health Solutions</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle size={20} className="text-[#F2AA8A]" />
              <span className="font-semibold text-[#0A3635]">Rapid Patient Improvement</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle size={20} className="text-[#F2AA8A]" />
              <span className="font-semibold text-[#0A3635]">World Class Treatment</span>
            </div>
          </div>
          
          <div className="inline-block">
            <button className="b border-2 border-[#F2AA8A] text-[#F2AA8A] font-medium rounded-full px-6 py-3 flex items-center space-x-2">
              <span>Read More</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;