"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=pintsjm@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    
    window.open(mailtoLink, "_blank");
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      {/* Header Section */}
      <div className="relative">
        {/* Purple glow effects */}
        <div className="absolute top-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/15 rounded-full blur-3xl -z-10" />
        <div className="absolute top-40 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-violet-500/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto pt-8 sm:pt-12 md:pt-16">
          {/* Page Title */}
          <div className="mb-12 sm:mb-16 text-center">
            <p className="text-purple-400 font-medium mb-2 text-sm sm:text-base">Get in touch</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Contact <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-violet-400 to-fuchsia-400">Me</span>
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-purple-500 to-violet-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Let's Start a <span className="text-purple-400">Conversation</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
                Have a project in mind or just want to chat? Feel free to reach out! 
                I'm always open to discussing new opportunities, collaborations, or 
                simply connecting with fellow developers.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=pintsjm@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-gray-900/60 border border-purple-500/20 hover:border-purple-400/50 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-white font-medium text-lg">pintsjm@gmail.com</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-gray-900/60 border border-purple-500/20">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white font-medium text-lg">Philippines</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-gray-900/60 border border-purple-500/20">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-fuchsia-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Availability</p>
                    <p className="text-white font-medium text-lg">Open to opportunities</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-gray-400 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/devjeyem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:text-purple-300 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:text-purple-300 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:text-purple-300 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:text-purple-300 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-gray-900/80 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-gray-900/80 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-gray-900/80 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-lg bg-gray-900/80 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 focus:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-linear-to-r from-purple-500 to-violet-500 text-white text-lg font-semibold transition-all hover:from-purple-600 hover:to-violet-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/40 text-green-400 text-center">
                    Gmail opened! Complete sending your message there.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 sm:mt-20 text-center pb-8">
            <p className="text-gray-400 text-lg mb-4">Prefer to see my work first?</p>
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gray-900/80 border border-gray-700 text-white text-lg font-medium transition-all hover:bg-gray-800 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              View My Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
