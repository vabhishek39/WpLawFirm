'use client';

import { motion } from 'motion/react';
import { ShieldAlert, Scale, Building2, Users, Home, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import ConsultationBooking from '@/components/ConsultationBooking';

const services = [
  {
    id: 'criminal',
    title: 'Criminal Law',
    description: 'Expert defense in criminal proceedings, ensuring your rights are protected at every stage of the legal process.',
    icon: ShieldAlert,
    features: ['Bail Applications', 'White Collar Crimes', 'Cyber Crimes', 'Appeals & Revisions'],
  },
  {
    id: 'civil',
    title: 'Civil Law',
    description: 'Comprehensive representation in civil disputes, including contracts, torts, and constitutional matters.',
    icon: Scale,
    features: ['Contract Disputes', 'Defamation Cases', 'Injunctions', 'Recovery Suits'],
  },
  {
    id: 'corporate',
    title: 'Corporate Law',
    description: 'Strategic legal counsel for businesses, covering mergers, acquisitions, compliance, and corporate governance.',
    icon: Building2,
    features: ['Mergers & Acquisitions', 'Intellectual Property', 'Employment Law', 'Regulatory Compliance'],
  },
  {
    id: 'family',
    title: 'Family Law',
    description: 'Compassionate handling of sensitive family matters including divorce, child custody, and inheritance disputes.',
    icon: Users,
    features: ['Divorce Proceedings', 'Child Custody', 'Alimony & Maintenance', 'Domestic Violence'],
  },
  {
    id: 'property',
    title: 'Property Law',
    description: 'Specialized assistance in real estate transactions, property disputes, and land acquisition matters.',
    icon: Home,
    features: ['Title Verification', 'Lease Agreements', 'Property Disputes', 'RERA Compliance'],
  },
];

export default function ServicesPage() {
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Our Practice Areas</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal solutions tailored to your specific needs. Our specialized teams bring deep expertise to every case.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-mt-32`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10"></div>
                      <img 
                        src={`https://picsum.photos/seed/${service.id}/800/600?grayscale`} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-8 left-8 z-20">
                        <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">{service.title}</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href="/contact#consultation"
                      className="inline-flex items-center gap-2 bg-transparent hover:bg-yellow-500/10 text-yellow-500 border border-yellow-500/50 px-6 py-3 rounded-full font-medium transition-all"
                    >
                      Consult an Expert <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      <ConsultationBooking />
    </div>
  );
}
