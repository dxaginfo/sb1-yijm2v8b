import React from 'react';
import Hero from '../components/home/Hero';
import CoreServices from '../components/home/CoreServices';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <CoreServices />
      <ProcessSection />
      <CTASection />
    </div>
  );
}