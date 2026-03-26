'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ConsultationBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="consultation" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600 rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-yellow-500 font-semibold tracking-wider uppercase text-sm mb-3">Book a Consultation</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Let&apos;s Discuss Your Legal Needs</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Schedule a confidential consultation with our expert legal team. We&apos;ll review your case, explain your options, and outline a strategic path forward.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Flexible Scheduling</h4>
                  <p className="text-gray-400">Choose a date and time that works best for you, including evening and weekend appointments.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Expert Assessment</h4>
                  <p className="text-gray-400">Meet with a specialized attorney who understands the nuances of your specific legal situation.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#171717] border border-white/10 rounded-2xl p-8 shadow-2xl relative"
          >
            {isSuccess && (
              <div className="absolute inset-0 bg-[#171717]/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-gray-400">Thank you for reaching out. Our team will contact you shortly to confirm your consultation.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-gray-300">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Brief Description of Your Case</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors resize-none"
                    placeholder="Please provide a brief overview of your legal matter..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg py-4 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  'Request Consultation'
                )}
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our Privacy Policy. Information shared is strictly confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
