'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    content: 'Wp Law Firm provided exceptional legal counsel during our corporate restructuring. Their attention to detail and strategic approach saved us significant time and resources.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Client',
    content: 'I was facing a complex property dispute, and the team at Wp Law Firm handled it with utmost professionalism. They were always available to answer my questions and kept me informed.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Entrepreneur',
    content: 'Their expertise in contract law is unmatched. They drafted comprehensive agreements that protected our interests perfectly. Highly recommended for any business legal needs.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-600 rounded-full mix-blend-screen filter blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-yellow-500 font-semibold tracking-wider uppercase text-sm mb-3">Client Success</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">What Our Clients Say</h3>
          <p className="text-gray-400 text-lg">
            Don&apos;t just take our word for it. Read about the experiences of those we&apos;ve represented in courts across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] border border-white/5 rounded-2xl p-8 relative group hover:border-yellow-500/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-yellow-500/10 group-hover:text-yellow-500/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed italic relative z-10">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
