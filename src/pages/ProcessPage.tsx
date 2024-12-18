import React from 'react';
import ProcessHero from '../components/process/ProcessHero';
import ProcessSteps from '../components/process/ProcessSteps';
import ProcessCTA from '../components/process/ProcessCTA';

export default function ProcessPage() {
  return (
    <div className="pt-20">
      <ProcessHero />
      <ProcessSteps />
      <ProcessCTA />
    </div>
  );
}