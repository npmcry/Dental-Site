"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
// TODO: Enable when setting up authentication
// import { signIn, useSession } from "next-auth/react";

const PatientPage = () => {
    // TODO: Enable when setting up authentication
    // const { data: session, status } = useSession();
    const [showEmailForm, setShowEmailForm] = useState(false);

    const handleGoogleSignIn = () => {
        // TODO: Implement Google Sign-in
        console.log("Google sign-in - coming soon");
    };

    const handleAppleSignIn = () => {
        // TODO: Implement Apple Sign-in
        console.log("Apple sign-in - coming soon");
    };

    // Remove session check temporarily
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pt-24">
            <div className="max-w-md mx-auto p-6">
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="flex justify-center mb-8">
                        <Image
                            src="https://api.dicebear.com/7.x/personas/svg?seed=Felix"
                            alt="Patient Avatar"
                            width={90}
                            height={90}
                            className="rounded-2xl bg-blue-50 p-1"
                            unoptimized={true}
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-[#2469FD] mb-8 text-center">
                        Welcome Back
                    </h2>

                    {!showEmailForm ? (
                        <div className="space-y-4">
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full flex items-center justify-center space-x-3 bg-white text-gray-700 rounded-xl py-3 px-4 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
                            >
                                <FcGoogle className="text-2xl" />
                                <span>Continue with Google</span>
                            </button>
                            
                            <button
                                onClick={handleAppleSignIn}
                                className="w-full flex items-center justify-center space-x-3 bg-black text-white rounded-xl py-3 px-4 hover:bg-gray-900 transition-all duration-200"
                            >
                                <FaApple className="text-2xl" />
                                <span>Continue with Apple</span>
                            </button>

                            <button
                                onClick={() => setShowEmailForm(true)}
                                className="w-full flex items-center justify-center space-x-3 bg-[#2469FD] text-white rounded-xl py-3 px-4 hover:bg-blue-600 transition-all duration-200"
                            >
                                <HiMail className="text-2xl" />
                                <span>Sign in with Email</span>
                            </button>

                            <div className="mt-6 text-center">
                                <p className="text-gray-600">Don&apos;t have an account?</p>
                                <Link 
                                    href="/register"
                                    className="text-[#2469FD] font-semibold hover:text-blue-700 transition-colors mt-1 inline-block"
                                >
                                    Create an Account
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2469FD] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2469FD] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                            <button
                                onClick={() => console.log('Email sign-in')}
                                className="w-full bg-[#2469FD] text-white rounded-xl py-3 hover:bg-blue-600 transition-all duration-200"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setShowEmailForm(false)}
                                className="w-full text-gray-600 hover:text-gray-800 transition-colors"
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