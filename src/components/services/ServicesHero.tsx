import React from 'react';
import GradientText from '../shared/GradientText';

export default function ServicesHero() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <GradientText>How Sonica Works for You</GradientText>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your brand through the power of sound and science. Our comprehensive 
            services are designed to create memorable, multi-sensory experiences.
          </p>
        </div>
      </div>
    </section>
  );
}