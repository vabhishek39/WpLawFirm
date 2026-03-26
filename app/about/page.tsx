'use client';

import { motion } from 'motion/react';
import { Scale, Target, Heart, Shield } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty with our clients.',
    icon: Shield,
  },
  {
    title: 'Excellence',
    description: 'We strive for legal excellence, continuously updating our knowledge to provide top-tier representation.',
    icon: Target,
  },
  {
    title: 'Compassion',
    description: 'We approach every case with empathy, understanding the personal impact of legal challenges on our clients.',
    icon: Heart,
  },
];

const lawyers = [
  {
    name: 'Vikram Singh',
    role: 'Managing Partner',
    specialty: 'Corporate & Commercial Law',
    image: 'https://picsum.photos/seed/lawyer1/400/500?grayscale',
    bio: 'With over 20 years of experience in the Supreme Court of India, Vikram leads our corporate practice with unmatched strategic vision.',
  },
  {
    name: 'Anjali Desai',
    role: 'Senior Partner',
    specialty: 'Family & Civil Law',
    image: 'https://picsum.photos/seed/lawyer2/400/500?grayscale',
    bio: 'Anjali is renowned for her compassionate yet fierce representation in complex family disputes and civil litigation.',
  },
  {
    name: 'Rahul Kapoor',
    role: 'Partner',
    specialty: 'Criminal Defense',
    image: 'https://picsum.photos/seed/lawyer3/400/500?grayscale',
    bio: 'A formidable presence in the courtroom, Rahul has successfully defended high-profile cases across multiple jurisdictions.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 z-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-screen filter blur-[128px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Scale className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">About Wp Law Firm</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Established in 2005, Wp Law Firm has grown to become one of India&apos;s most respected legal institutions, dedicated to delivering justice with unwavering commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                To provide exceptional, accessible, and ethical legal representation to individuals and businesses across India. We believe that justice should not be a privilege, but a fundamental right, and we fight tirelessly to ensure our clients&apos; voices are heard and their rights protected.
              </p>
              <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
            </motion.div>

            <div className="grid gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-yellow-500 font-semibold tracking-wider uppercase text-sm mb-3">Our Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Meet Our Legal Experts</h3>
            <p className="text-gray-400 text-lg">
              Our team comprises some of the most distinguished legal minds in the country, bringing decades of combined experience to your case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawyers.map((lawyer, index) => (
              <motion.div
                key={lawyer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#171717] border border-white/5"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-yellow-500 font-medium mb-1">{lawyer.specialty}</p>
                  <h4 className="text-2xl font-serif font-bold text-white mb-1">{lawyer.name}</h4>
                  <p className="text-gray-300 text-sm mb-4">{lawyer.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {lawyer.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
