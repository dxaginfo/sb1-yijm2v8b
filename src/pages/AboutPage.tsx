import React from 'react';
import AboutHero from '../components/about/AboutHero';
import WhySonica from '../components/about/WhySonica';
import AboutFeatures from '../components/about/AboutFeatures';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutHero />
      <WhySonica />
      <AboutFeatures />
    </div>
  );
}