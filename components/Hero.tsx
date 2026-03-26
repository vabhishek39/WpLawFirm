'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a] z-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-900 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium mb-8">
              <Scale className="w-4 h-4" />
              <span>Premium Legal Services in India</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Justice. <br />
              <span className="text-gradient">Integrity.</span> <br />
              Excellence.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Wp Law Firm provides unparalleled legal representation across India. We fight for your rights with dedication, expertise, and a commitment to achieving the best possible outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact#consultation"
                className="inline-flex justify-center items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex justify-center items-center gap-2 bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Our Practice Areas
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
              {/* Using a placeholder for the hero image */}
              <img
                src="https://picsum.photos/seed/lawyer/800/1000?grayscale"
                alt="Professional Lawyer"
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img key={i} src={`https://picsum.photos/seed/client${i}/40/40`} alt="Client" className="w-10 h-10 rounded-full border-2 border-[#171717]" />
                    ))}
                  </div>
                  <div className="text-yellow-500 font-bold text-xl">500+</div>
                </div>
                <p className="text-gray-300 font-medium">Successful cases won across India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
