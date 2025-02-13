"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactConfetti from 'react-confetti';

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patientType: "",
    appointmentType: "",
    date: null as Date | null,
    timeSlot: "",
    firstName: "",
    lastName: "",
    dob: "",
    insurance: "",
    email: "",
    phone: "",
    verificationCode: "",
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, date });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    if (step === 2 && isVerifying) {
      setIsVerifying(false);
    }
  };

  const handleSendVerification = async () => {
    console.log("Verification code would be sent to:", formData.phone);
    setIsVerifying(true);
  };

  const handleVerifyCode = async () => {
    console.log("Code verification successful");
    setIsVerified(true);
    handleNext();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Simulate success without API call
    setShowSuccess(true);
    
    // Reset form after delay
    setTimeout(() => {
      setShowSuccess(false);
      setStep(1);
      setFormData({
        patientType: "",
        appointmentType: "",
        date: null,
        timeSlot: "",
        firstName: "",
        lastName: "",
        dob: "",
        insurance: "",
        email: "",
        phone: "",
        verificationCode: "",
      });
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-2xl rounded-[32px] p-12 w-full max-w-3xl transition-all duration-300"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#2469FD] to-[#4F46E5] text-transparent bg-clip-text text-center mb-10">
          Book Your Appointment
        </h1>
        
        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-gray-100 rounded-full mb-12">
          <div 
            className="h-full bg-[#2469FD] rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-4">
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="p-2 text-gray-600 hover:text-[#2469FD] transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <label className="block text-2xl font-medium text-gray-700 text-center">
                  Are you a new patient?
                </label>
                <div className="w-6"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "New", label: "New Patient" },
                  { value: "Returning", label: "Returning Patient" }
                ].map((type) => (
                  <label
                    key={type.value}
                    className={`p-6 border rounded-[30px] cursor-pointer transition-all duration-200 hover:border-[#2469FD] hover:shadow-md ${
                      formData.patientType === type.value
                        ? type.value === "New"
                          ? "border-[#2469FD] bg-blue-50 shadow-sm"
                          : "border-[#2469FD] bg-green-50 shadow-sm"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="patientType"
                      value={type.value}
                      checked={formData.patientType === type.value}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center text-center space-y-2">
                      <span className={`text-lg font-medium ${
                        formData.patientType === type.value && type.value === "Returning" 
                          ? "text-green-700"
                          : ""
                      }`}>{type.label}</span>
                      <span className={`text-sm ${
                        formData.patientType === type.value && type.value === "Returning"
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}>
                        {type.value === "New" 
                          ? "First time visiting us" 
                          : "Welcome back!"
                        }
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              <button 
                type="button" 
                onClick={handleNext} 
                className="mt-8 px-8 py-4 bg-[#2469FD] text-white rounded-[30px] w-full transition-all duration-200 hover:bg-[#2469FD]/90 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Continue →
              </button>
            </motion.div>
          )}

          {step === 2 && formData.patientType === "New" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-4">
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="p-2 text-gray-600 hover:text-[#2469FD] transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <label className="block text-2xl font-medium text-gray-700 text-center">
                  What would you like to do?
                </label>
                <div className="w-6"></div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {["Cleaning", "Checkup", "Consultation"].map((type) => (
                  <label
                    key={type}
                    className={`p-4 border rounded-[30px] cursor-pointer transition-all duration-200 ${
                      formData.appointmentType === type
                        ? "border-[#2469FD] bg-blue-50"
                        : "border-gray-200 hover:border-[#2469FD]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="appointmentType"
                      value={type}
                      checked={formData.appointmentType === type}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="block text-lg text-center">{type}</span>
                  </label>
                ))}
              </div>
              <button 
                type="button" 
                onClick={handleNext} 
                className="mt-8 px-8 py-4 bg-[#2469FD] text-white rounded-[30px] w-full transition-all duration-200 hover:bg-[#2469FD]/90 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Continue →
              </button>
            </motion.div>
          )}

          {step === 2 && formData.patientType === "Returning" && !isVerified && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-4">
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="p-2 text-gray-600 hover:text-[#2469FD] transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <label className="block text-2xl font-medium text-gray-700 text-center">
                  Sign in with phone
                </label>
                <div className="w-6"></div>
              </div>
              
              {!isVerifying ? (
                <div className="space-y-6">
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full p-5 border border-gray-200 rounded-[30px] focus:ring-2 focus:ring-[#2469FD] focus:border-transparent transition-all duration-200 outline-none text-lg"
                    placeholder="(123) 456-7890"
                  />
                  <button 
                    type="button" 
                    onClick={handleSendVerification}
                    className="mt-8 px-8 py-4 bg-[#2469FD] text-white rounded-[30px] w-full transition-all duration-200 hover:bg-[#2469FD]/90 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Send Verification Code
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <input 
                    type="text" 
                    name="verificationCode" 
                    value={formData.verificationCode || ''} 
                    onChange={handleChange} 
                    className="w-full p-5 border border-gray-200 rounded-[30px] focus:ring-2 focus:ring-[#2469FD] focus:border-transparent transition-all duration-200 outline-none text-lg text-center tracking-widest"
                    placeholder="Enter 6-digit code"
                    maxLength={6}
                  />
                  <div className="text-center text-sm text-gray-500">
                    We sent a code to {formData.phone}
                  </div>
                  <button 
                    type="button" 
                    onClick={handleVerifyCode}
                    className="mt-8 px-8 py-4 bg-[#2469FD] text-white rounded-[30px] w-full transition-all duration-200 hover:bg-[#2469FD]/90 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Verify Code
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {step === 2 && formData.patientType === "Returning" && isVerified && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-4">
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="p-2 text-gray-600 hover:text-[#2469FD] transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <label className="block text-2xl font-medium text-gray-700 text-center">
                  What would you like to do?
                </label>
                <div className="w-6"></div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {["Cleaning", "Checkup", "Consultation"].map((type) => (
                  <label
                    key={type}
                    className={`p-4 border rounded-[30px] cursor-pointer transition-all duration-200 ${
                      formData.appointmentType === type
                        ? "border-[#2469FD] bg-blue-50"
                        : "border-gray-200 hover:border-[#2469FD]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="appointmentType"
                      value={type}
                      checked={formData.appointmentType === type}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="block text-lg text-center">{type}</span>
                  </label>
                ))}
              </div>
              <button 
                type="button" 
                onClick={handleNext} 
                className="mt-8 px-8 py-4 bg-[#2469FD] text-white rounded-[30px] w-full transition-all duration-200 hover:bg-[#2469FD]/90 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Continue →
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between mb-4">
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="p-2 text-gray-600 hover:text-[#2469FD] transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <label className="block text-2xl font-medium text-gray-700 text-center">
                  Select Date & Time
                </label>
                <div className="w-6"></div>
              </div>
              <div className="space-y-4">
                <label className="block text-lg font-medium text-gray-700">Pick a date</label>
                <div className="datepicker-container">
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    dateFormat="MMMM d, yyyy"
                    className="w-full p-5 border border-gray-200 rounded-[20px] focus:ring-2 focus:ring-[#2469FD] focus:border-transparent transition-all duration-200 outline-none text-lg hover:border-[#2469FD]"
                    wrapperClassName="w-full"
                    showPopperArrow={false}
                    placeholderText="Select a date"
                    excludeDates={[new Date('2024-01-01')]} // Example: exclude holidays
                    filterDate={(date) => {
                      const day = date.getDay();
                      return day !== 0 && day !== 6; // Exclude weekends
                    }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-lg font-medium text-gray-700">Time Slot</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "9:00 AM",
                    "10:00 AM",
                    "11:00 AM",
                    "2:00 PM",
                    "3:00 PM",
                    "4:00 PM"
                  ].map((time) => (
                    <label
                      key={time}
                      className={`p-4 border rounded-[20px] cursor-pointer transition-all duration-200 hover:border-[#2469FD] ${
                        formData.timeSlot === time
                          ? "border-[#2469FD] bg-blue-50 shadow-sm"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeSlot"
                        value={time}
                        checked={formData.timeSlot === time}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="block text-center text-lg">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                type="button" 
                onClick={handleNext} 
                className="mt-10 px-8 py-4 bg-[#2469FD] text-white rounded-[30px] w-full transition-all duration-200 hover:bg-[#2469FD]/90 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Continue →
              </button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between mb-4">
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="p-2 text-gray-600 hover:text-[#2469FD] transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <label className="block text-2xl font-medium text-gray-700 text-center">
                  Your Information
                </label>
                <div className="w-6"></div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-medium text-gray-700">First Name</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2469FD] focus:border-transparent transition-all duration-200 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2469FD] focus:border-transparent transition-all duration-200 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2469FD] focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="mt-8 px-8 py-4 bg-[#2469FD] text-white rounded-[30px] w-full transition-all duration-200 hover:bg-[#2469FD]/90 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
              >
                <span>Confirm Appointment</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          )}
        </form>
      </motion.div>
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-[9999]">
          <ReactConfetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={200}
            colors={['#2469FD', '#4F46E5', '#60A5FA', '#93C5FD']}
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center relative z-50"
          >
            <div className="w-32 h-32 mx-auto mb-6">
              <img 
                src="/tooth.svg" 
                alt="Cute tooth" 
                className="w-full h-full text-[#2469FD] animate-bounce"
              />
            </div>
            <h2 className="text-3xl font-bold text-[#2469FD] mb-2">You&apos;re all set!</h2>
            <p className="text-gray-600 text-lg">
              We can&apos;t wait to see your smile!
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
