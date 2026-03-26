import Link from 'next/link';
import { Scale, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Scale className="w-8 h-8 text-yellow-500" />
              <span className="font-serif text-2xl font-bold text-white">
                Wp Law <span className="text-yellow-500">Firm</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium legal representation across India. We deliver excellence, integrity, and results in every case we handle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Practice Areas</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</Link></li>
              <li><Link href="/contact#consultation" className="text-gray-400 hover:text-yellow-500 transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              <li><Link href="/services#criminal" className="text-gray-400 hover:text-yellow-500 transition-colors">Criminal Law</Link></li>
              <li><Link href="/services#civil" className="text-gray-400 hover:text-yellow-500 transition-colors">Civil Law</Link></li>
              <li><Link href="/services#corporate" className="text-gray-400 hover:text-yellow-500 transition-colors">Corporate Law</Link></li>
              <li><Link href="/services#family" className="text-gray-400 hover:text-yellow-500 transition-colors">Family Law</Link></li>
              <li><Link href="/services#property" className="text-gray-400 hover:text-yellow-500 transition-colors">Property Law</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
                <span>123 Legal Avenue, Connaught Place,<br />New Delhi, 110001, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>contact@wplawfirm.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Wp Law Firm. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="text-gray-500 hover:text-white transition-colors">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
