"use client";
import { useState } from "react";

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patientType: "",
    appointmentType: "",
    date: "",
    timeSlot: "",
    firstName: "",
    lastName: "",
    dob: "",
    insurance: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Appointment booked successfully!");
      setStep(1);
      setFormData({
        patientType: "",
        appointmentType: "",
        date: "",
        timeSlot: "",
        firstName: "",
        lastName: "",
        dob: "",
        insurance: "",
        email: "",
        phone: "",
      });
    } else {
      alert("Error booking appointment.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg transition-all duration-300">
        <h1 className="text-4xl font-bold text-[#2469FD] text-center">Book Your Appointment</h1>
        
        {/* Step-by-Step Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          {step === 1 && (
            <div className="fade-in">
              <label className="block text-lg font-semibold">Are you a new patient?</label>
              <select name="patientType" value={formData.patientType} onChange={handleChange} className="w-full p-3 border rounded-md">
                <option value="">Select</option>
                <option value="New">New Patient</option>
                <option value="Returning">Returning Patient</option>
              </select>
              <button type="button" onClick={handleNext} className="mt-4 px-6 py-3 bg-[#2469FD] text-white rounded-[20px] w-full transition hover:bg-[#3A5899]">
                Next
              </button>
            </div>
          )}

          {step === 2 && formData.patientType === "New" && (
            <div className="fade-in">
              <label className="block text-lg font-semibold">What would you like to do?</label>
              <select name="appointmentType" value={formData.appointmentType} onChange={handleChange} className="w-full p-3 border rounded-md">
                <option value="">Select</option>
                <option value="Cleaning">Teeth Cleaning</option>
                <option value="Checkup">General Checkup</option>
                <option value="Consultation">Consultation</option>
              </select>
              <button type="button" onClick={handleNext} className="mt-4 px-6 py-3 bg-[#2469FD] text-white rounded-[20px] w-full transition hover:bg-[#3A5899]">
                Next
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="fade-in">
              <label className="block text-lg font-semibold">Pick a date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border rounded-md" />

              <label className="block mt-4 text-lg font-semibold">Time Slot</label>
              <input type="text" name="timeSlot" value={formData.timeSlot} onChange={handleChange} className="w-full p-3 border rounded-md" />

              <button type="button" onClick={handleNext} className="mt-4 px-6 py-3 bg-[#2469FD] text-white rounded-[20px] w-full transition hover:bg-[#3A5899]">
                Next
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="fade-in">
              <label className="block text-lg font-semibold">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 border rounded-md" />

              <label className="block mt-4 text-lg font-semibold">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 border rounded-md" />

              <label className="block mt-4 text-lg font-semibold">Phone Number</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-md" />

              <button type="submit" className="mt-6 px-6 py-3 bg-[#2469FD] text-white rounded-[20px] w-full transition hover:bg-[#3A5899]">
                Confirm Appointment
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
