'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ShieldAlert, Scale, Building2, Users, Home, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'criminal',
    title: 'Criminal Law',
    description: 'Expert defense in criminal proceedings, ensuring your rights are protected at every stage of the legal process.',
    icon: ShieldAlert,
  },
  {
    id: 'civil',
    title: 'Civil Law',
    description: 'Comprehensive representation in civil disputes, including contracts, torts, and constitutional matters.',
    icon: Scale,
  },
  {
    id: 'corporate',
    title: 'Corporate Law',
    description: 'Strategic legal counsel for businesses, covering mergers, acquisitions, compliance, and corporate governance.',
    icon: Building2,
  },
  {
    id: 'family',
    title: 'Family Law',
    description: 'Compassionate handling of sensitive family matters including divorce, child custody, and inheritance disputes.',
    icon: Users,
  },
  {
    id: 'property',
    title: 'Property Law',
    description: 'Specialized assistance in real estate transactions, property disputes, and land acquisition matters.',
    icon: Home,
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-yellow-500 font-semibold tracking-wider uppercase text-sm mb-3">Practice Areas</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Expertise You Can Trust</h3>
          <p className="text-gray-400 text-lg">
            Our specialized teams provide comprehensive legal solutions tailored to your unique situation, backed by years of successful practice in Indian courts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#111111] border border-white/5 hover:border-yellow-500/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]"
              >
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors duration-300" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h4>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-yellow-500 font-medium group-hover:text-yellow-400 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
