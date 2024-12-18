import React from 'react';
import GradientText from '../shared/GradientText';

export default function ProcessHero() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <GradientText>Our Signature Process</GradientText>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A systematic approach to creating powerful, multi-sensory brand experiences that 
            resonate with your audience and drive measurable results.
          </p>
        </div>
      </div>
    </section>
  );
}