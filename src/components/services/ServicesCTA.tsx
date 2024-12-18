import React from 'react';
import CTAButton from '../shared/CTAButton';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 gradient-text">Transform Your Brand Today</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Ready to create a memorable multi-sensory experience for your brand? Let's work together 
          to make your brand stand out.
        </p>
        <CTAButton text="Get Started" to="/contact" />
      </div>
    </section>
  );
}