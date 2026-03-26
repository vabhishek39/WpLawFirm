'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ConsultationBooking from '@/components/ConsultationBooking';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 z-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-screen filter blur-[128px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are here to help. Reach out to us for expert legal advice and representation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-8">Get in Touch</h2>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Office Address</h3>
                  <p className="text-gray-400 leading-relaxed">
                    123 Legal Avenue, Connaught Place,<br />
                    New Delhi, 110001,<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
                  <p className="text-gray-400 leading-relaxed">
                    +91 98765 43210<br />
                    011-23456789 (Landline)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-400 leading-relaxed">
                    contact@wplawfirm.com<br />
                    support@wplawfirm.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Working Hours</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 h-[500px] rounded-2xl overflow-hidden border border-white/10 relative"
            >
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.11482718424!2d77.216721!3d28.632832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdef8ef79fac41cb!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <ConsultationBooking />
    </div>
  );
}
