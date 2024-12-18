import React from 'react';
import GradientText from '../shared/GradientText';

export default function AboutHero() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <GradientText>What Makes Sonica Different?</GradientText>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your brand isn't one-dimensional, so why should your strategy be? We combine sound, 
            neuromarketing, and color psychology to create fully immersive experiences.
          </p>
        </div>
      </div>
    </section>
  );
}