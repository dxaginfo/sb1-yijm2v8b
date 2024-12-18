import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServicesCTA from '../components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </div>
  );
}