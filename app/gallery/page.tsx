"use client";
import React from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

const SmileGallery = () => {
    const smiles = [
        {
            id: 1,
            title: "Bright & Beautiful",
            before: "https://placehold.co/500x500/e2e8f0/2469fd?text=Before+Treatment",
            after: "https://placehold.co/500x500/e2e8f0/2469fd?text=After+Whitening",
            description: "✨ Professional Teeth Whitening"
        },
        {
            id: 2,
            title: "Perfect Alignment",
            before: "https://placehold.co/500x500/e2e8f0/2469fd?text=Before+Alignment",
            after: "https://placehold.co/500x500/e2e8f0/2469fd?text=After+Alignment",
            description: "🌟 Invisalign Results"
        },
        {
            id: 3,
            title: "Complete Care",
            before: "https://placehold.co/500x500/e2e8f0/2469fd?text=Before+Care",
            after: "https://placehold.co/500x500/e2e8f0/2469fd?text=After+Care",
            description: "💫 Full Dental Treatment"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2469FD] to-[#4F46E5] bg-clip-text text-transparent mb-4">
                        Smile Transformations
                    </h1>
                    <div className="flex items-center justify-center space-x-2">
                        <FaHeart className="text-[#2469FD]" />
                        <p className="text-gray-600 text-lg">Before & After Magic</p>
                        <FaHeart className="text-[#2469FD]" />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {smiles.map((smile) => (
                        <div 
                            key={smile.id}
                            className="bg-white/80 backdrop-blur-xl rounded-[30px] p-6 shadow-lg border border-blue-50 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="space-y-6">
                                <div className="relative">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 rounded-[30px] blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
                                    <div className="relative space-y-4">
                                        <div className="relative h-56 w-full overflow-hidden rounded-[20px]">
                                            <Image
                                                src={smile.before}
                                                alt={`${smile.title} Before`}
                                                fill
                                                className="object-cover transform group-hover:scale-105 transition duration-500"
                                                unoptimized={true}
                                            />
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-[#2469FD]">
                                                Before
                                            </div>
                                        </div>
                                        <div className="relative h-56 w-full overflow-hidden rounded-[20px]">
                                            <Image
                                                src={smile.after}
                                                alt={`${smile.title} After`}
                                                fill
                                                className="object-cover transform group-hover:scale-105 transition duration-500"
                                                unoptimized={true}
                                            />
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-[#2469FD]">
                                                After
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#2469FD] to-[#4F46E5] bg-clip-text text-transparent">
                                        {smile.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg">{smile.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmileGallery;