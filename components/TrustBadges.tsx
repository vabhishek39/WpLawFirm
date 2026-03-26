'use client';

import { motion } from 'motion/react';
import { Award, ShieldCheck, Scale, FileText } from 'lucide-react';

const badges = [
  {
    id: 1,
    title: 'Bar Council of India',
    description: 'Registered Advocates',
    icon: Scale,
  },
  {
    id: 2,
    title: 'Top Rated Firm',
    description: 'Legal Excellence 2025',
    icon: Award,
  },
  {
    id: 3,
    title: '100% Confidential',
    description: 'Secure Client Data',
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: 'Certified Experts',
    description: 'Specialized Practice',
    icon: FileText,
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-[#171717] rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-500/10 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{badge.title}</h4>
                <p className="text-gray-500 text-sm">{badge.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
