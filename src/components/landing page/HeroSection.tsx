'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Play, ArrowRight } from 'lucide-react'
import female from '@/images/hero-img-1.jpg'
import walking from '@/images/hero-img-2.jpg'

const HeroSection = () => {
  return (
    <section className="relative bg-[#0A3635] text-white pb-16">
      {/* Main content - desktop layout */}
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:gap-8 lg:min-h-[600px] lg:py-16">
        {/* Left column */}
        <div className="lg:w-1/2 pt-16 lg:pt-26">
          {/* Subtitle */}
          <h2 className="md:text-[18px] text-[16px] tracking-wider uppercase mb-4">
            WE TACK CARE OF YOUR HEALTH
          </h2>

          {/* Main heading */}
          <h1 className="md:text-5xl text-xl font-bold text-[#F2AA8A] mb-6 leading-tight">
            We Are Providing <br className="hidden lg:block" />
            Best & Affordable <br className="hidden lg:block" />
            Health Care.
          </h1>

          {/* Description text */}
          <p className="text-gray-400 mb-12 text-lg max-w-md">
            Our is to deliver the highest quality healthcare services. 
            We believe that everyone deserves access to excellent 
            medical care without compromising on quality.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-2 mb-16 lg:mb-0">
            <Link 
              href="/learn-more" 
              className="flex items-center justify-center text-[12px] gap-2 bg-transparent border-2 border-[#F2AA8A] text-[#F2AA8A] rounded-full px-8 py-3 font-medium transition-colors hover:bg-[#F2AA8A] hover:text-[#0A3635]"
            >
              Read More <ArrowRight size={20} />
            </Link>
            
            <Link 
              href="/watch-video" 
              className="flex items-center justify-center text-[12px] gap-2 text-white py-3 font-medium"
            >
              <div className="bg-white rounded-full p-1 mr-2">
                <Play size={18} className="text-[#0A3635] ml-0.5" />
              </div>
              Watch Video
            </Link>
          </div>
        </div>

        {/* Right column - Images (desktop only) */}
        <div className="hidden lg:block lg:w-1/2 relative pt-16">
          <div className="relative z-10 flex justify-between gap-4">
            <div className="w-[45%] overflow-hidden rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full">
              <Image
                src={female}
                alt="Female Doctor"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-[45%] overflow-hidden relative top-[-60px] rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full">
              <Image
                src={walking}
                alt="Doctors Walking"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Desktop dotted pattern */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-0 px-16 z-0">
          {Array(144).fill(null).map((_, i) => (
  <div key={i} className="w-1 h-1 bg-white opacity-30 rounded-full"></div>
))}
          </div>
        </div>
      </div>

      {/* Mobile images - only visible on mobile */}
      <div className="relative mt-4 mb-12 lg:hidden">
        <div className="relative z-10 flex justify-between px-4 gap-4">
          <div className="w-[45%] overflow-hidden rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full">
            <Image
              src={female}
              alt="Female Doctor"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-[45%] overflow-hidden rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full">
            <Image
              src={walking}
              alt="Doctors Walking"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Mobile dotted pattern */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 px-16 gap-2 z-0">
        {Array(144).fill(null).map((_, i) => (
  <div key={i} className="w-1 h-1 bg-white opacity-30 rounded-full"></div>
))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection