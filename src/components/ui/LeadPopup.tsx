"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // 1. Import toast and Toaster

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadPopup: React.FC<LeadPopupProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        // 2. Success Toast
        toast.success("Lead submitted successfully!");
        
        // Optional: Wait 1 second before closing so the user sees the toast
        setTimeout(() => {
          onClose();
        }, 1000); 
        
      } else {
        // 3. Error Toast
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* 4. Add the Toaster component here so the toasts can render */}
      <Toaster position="top-center" />

      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Book Free Demo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full border p-2 rounded"
          />
          <input
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Message (Optional)"
            className="w-full border p-2 rounded"
          />

          <button
            disabled={loading}
            className="w-full bg-[#FF7300] text-white py-2 rounded hover:bg-orange-600 cursor-pointer disabled:bg-orange-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;