"use client";

import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { User, Mail, Phone, MessageSquare, X, Send, Loader2, Sparkles } from "lucide-react";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadPopup: React.FC<LeadPopupProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay to allow the DOM to render the block before applying opacity
      setTimeout(() => setAnimateIn(true), 10);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  if (!isOpen && !animateIn) return null;

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
        toast.success("Demo Booked Successfully!");
        setTimeout(() => onClose(), 1500); 
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 pointer-events-auto ${animateIn ? 'bg-black/50 backdrop-blur-sm opacity-100' : 'bg-transparent backdrop-blur-none opacity-0'}`} onClick={onClose}>
      <Toaster position="top-center" />

      {/* Main Popup Container */}
      <div 
        className={`bg-white rounded-[2rem] w-full max-w-lg p-8 relative shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-500 delay-100 transform ${animateIn ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'} mx-4`}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
      >
        
        {/* Decorative Background Elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-yellow-200 to-orange-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-gray-50 text-gray-400 hover:text-gray-800 hover:bg-gray-100 p-2.5 rounded-full transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8 relative z-10 pt-2">
          <div className="mx-auto w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 text-[#FF7300] shadow-inner shadow-orange-200/50">
             <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Book a Free Demo
          </h2>
          <p className="text-gray-500 text-sm">
            Take the first step towards your dream career. Leave your details and our experts will contact you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
               <User className="w-5 h-5" />
             </div>
             <input
               name="name"
               required
               placeholder="Full Name"
               className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none"
             />
          </div>
          
          <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
               <Mail className="w-5 h-5" />
             </div>
             <input
               name="email"
               type="email"
               required
               placeholder="Email Address"
               className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none"
             />
          </div>

          <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
               <Phone className="w-5 h-5" />
             </div>
             <input
               name="phone"
               required
               placeholder="Phone Number"
               className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none"
             />
          </div>

          <div className="relative">
             <div className="absolute top-3.5 left-0 pl-4 pointer-events-none text-gray-400">
               <MessageSquare className="w-5 h-5" />
             </div>
             <textarea
               name="message"
               placeholder="Any questions? (Optional)"
               rows={3}
               className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none resize-none"
             />
          </div>

          <button
            disabled={loading}
            className="group w-full relative bg-gradient-to-r from-[#FF7300] to-orange-500 text-white font-bold py-4 rounded-xl shadow-[0_8px_20px_rgb(255,115,0,0.25)] hover:shadow-[0_8px_25px_rgb(255,115,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 cursor-pointer overflow-hidden flex items-center justify-center gap-2 mt-2"
          >
            <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            {loading ? (
              <>
               <Loader2 className="w-5 h-5 animate-spin" />
               <span>Booking Demo...</span>
              </>
            ) : (
              <>
               <span>Book My Free Demo</span>
               <Send className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};

export default LeadPopup;