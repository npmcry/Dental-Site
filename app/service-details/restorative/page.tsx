"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTooth, FaCrown, FaRegSmile } from 'react-icons/fa';

const RestorativeDentistry = () => {
  const features = [
    {
      title: "Dental Crowns",
      description: "Custom-made crowns to restore damaged teeth",
      icon: <FaCrown className="text-[#5E4432] text-3xl" />,
    },
    {
      title: "Dental Bridges",
      description: "Bridge the gap with natural-looking replacements",
      icon: <FaTooth className="text-[#5E4432] text-3xl" />,
    },
    {
      title: "Full Mouth Restoration",
      description: "Comprehensive treatment for complete smile makeover",
      icon: <FaRegSmile className="text-[#5E4432] text-3xl" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#FCEFE2] to-white pt-24 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#5E4432] to-[#8B6B5D] bg-clip-text text-transparent mb-4">
            ⭐ Restorative Dentistry ⭐
          </h1>
          <p className="text-[#5E4432] text-lg max-w-2xl mx-auto">
            Restore your smile&apos;s strength, beauty, and function with expert care
          </p>
        </div>

        <div className="relative rounded-[30px] overflow-hidden mb-16 group">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 rounded-[30px] blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/services-images/restorative.png"
              alt="Restorative Dentistry"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-[20px] p-8 shadow-lg border border-[#5E4432]/20 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#5E4432] mb-2">{feature.title}</h3>
              <p className="text-[#5E4432]/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <Link
            href="/appointment"
            className="inline-block bg-[#5E4432] text-white rounded-full px-8 py-4 font-medium hover:bg-[#8B6B5D] transition-all duration-300 transform hover:scale-105"
          >
            Restore Your Smile Today ⭐
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestorativeDentistry;