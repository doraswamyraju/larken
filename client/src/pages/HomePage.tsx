import React from 'react';
import { Hero } from '../components/home/Hero';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { TechCapabilities } from '../components/home/TechCapabilities';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HowWeWork } from '../components/home/HowWeWork';
import { IndustriesServed } from '../components/home/IndustriesServed';
import { CTASection } from '../components/home/CTASection';
import { QuickContactSection } from '../components/home/QuickContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <ServicesOverview />
      <TechCapabilities />
      <WhyChooseUs />
      <HowWeWork />
      <IndustriesServed />
      <CTASection />
      <QuickContactSection />
    </div>
  );
};
