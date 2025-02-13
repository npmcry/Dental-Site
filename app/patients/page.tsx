"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import FallingToothbrushes from '../components/FallingToothbrushes';

const PatientPage = () => {
    const [showEmailForm, setShowEmailForm] = useState(false);

    const handleGoogleSignIn = () => {
        // TODO: Implement Google sign-in
        console.log("Google sign-in - coming soon");
    };

    const handleAppleSignIn = () => {
        // TODO: Implement Apple sign-in
        console.log("Apple sign-in - coming soon");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pt-24 relative overflow-hidden">
            <FallingToothbrushes />
            <div className="max-w-md mx-auto p-6">
                <div className="bg-white/80 backdrop-blur-xl rounded-[30px] p-8 shadow-lg border border-blue-50 hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                            <Image
                                src="https://api.dicebear.com/7.x/micah/svg?seed=Felix&backgroundColor=b6e3f4"
                                alt="Patient Avatar"
                                width={100}
                                height={100}
                                className="relative rounded-3xl bg-white p-1 transform group-hover:scale-105 transition duration-300"
                                unoptimized={true}
                            />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2469FD] to-[#4F46E5] bg-clip-text text-transparent mb-8 text-center">
                        Welcome Back
                    </h2>

                    {!showEmailForm ? (
                        <div className="space-y-4">
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full flex items-center justify-center space-x-3 bg-white/80 text-gray-700 rounded-[30px] py-4 px-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all duration-200"
                            >
                                <FcGoogle className="text-2xl" />
                                <span className="font-medium">Continue with Google</span>
                            </button>
                            
                            <button
                                onClick={handleAppleSignIn}
                                className="w-full flex items-center justify-center space-x-3 bg-black text-white rounded-[30px] py-4 px-6 hover:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <FaApple className="text-2xl" />
                                <span className="font-medium">Continue with Apple</span>
                            </button>

                            <button
                                onClick={() => setShowEmailForm(true)}
                                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-[#2469FD] to-[#4F46E5] text-white rounded-[30px] py-4 px-6 hover:shadow-md transition-all duration-200 hover:opacity-90"
                            >
                                <HiMail className="text-2xl" />
                                <span className="font-medium">Sign in with Email</span>
                            </button>

                            <div className="mt-8 text-center">
                                <p className="text-gray-500">Don&apos;t have an account?</p>
                                <Link 
                                    href="/register"
                                    className="text-[#2469FD] font-semibold hover:text-[#4F46E5] transition-colors mt-2 inline-block"
                                >
                                    Create an Account →
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            <div className="relative">
                                <label className="block text-gray-600 mb-2 font-medium">Email</label>
                                <div className="relative">
                                    <HiMail className="absolute left-4 top-3.5 text-gray-400 text-xl" />
                                    <input
                                        type="email"
                                        className="w-full pl-12 pr-4 py-3 rounded-[30px] border border-gray-200 focus:border-[#2469FD] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-gray-600 mb-2 font-medium">Password</label>
                                <div className="relative">
                                    <HiLockClosed className="absolute left-4 top-3.5 text-gray-400 text-xl" />
                                    <input
                                        type="password"
                                        className="w-full pl-12 pr-4 py-3 rounded-[30px] border border-gray-200 focus:border-[#2469FD] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => console.log('Email sign-in')}
                                className="w-full bg-gradient-to-r from-[#2469FD] to-[#4F46E5] text-white rounded-[20px] py-4 font-medium hover:opacity-90 transition-all duration-200"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setShowEmailForm(false)}
                                className="w-full text-gray-500 hover:text-gray-700 transition-colors font-medium"
                            >
                                ← Back to all sign in options
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PatientPage;