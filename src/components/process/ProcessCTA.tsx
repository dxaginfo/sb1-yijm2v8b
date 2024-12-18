import React from 'react';
import CTAButton from '../shared/CTAButton';

export default function ProcessCTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Transform your brand with our proven process. Let's create a multi-sensory experience 
          that resonates with your audience.
        </p>
        <CTAButton text="Start Your Journey" to="/contact" />
      </div>
    </section>
  );
}