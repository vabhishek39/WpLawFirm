import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import ConsultationBooking from '@/components/ConsultationBooking';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesOverview />
      <Testimonials />
      <ConsultationBooking />
    </>
  );
}
