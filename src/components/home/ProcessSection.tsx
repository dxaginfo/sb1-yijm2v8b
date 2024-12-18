import React from 'react';
import { Search, Palette, Rocket, ChartBar } from 'lucide-react';

const phases = [
  {
    icon: Search,
    title: "Discovery",
    description: "Research audience behaviors, preferences, and sensory triggers. Identify market gaps and opportunities."
  },
  {
    icon: Palette,
    title: "Sensory Strategy Design",
    description: "Create unique sonic identity and color palettes aligned with brand values and psychological goals."
  },
  {
    icon: Rocket,
    title: "Execution",
    description: "Integrate sound and color into campaigns, content, and marketing efforts for immersive experiences."
  },
  {
    icon: ChartBar,
    title: "Performance Optimization",
    description: "Measure impact using neuromarketing analytics and refine elements for maximum engagement."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Our Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent transform translate-y-[-50%] translate-x-[50%]" />
              )}
              <div className="bg-gradient-to-b from-purple-900/50 to-transparent p-8 rounded-2xl backdrop-blur-sm relative z-10">
                <div className="bg-purple-600/20 p-4 rounded-lg inline-block mb-6">
                  <phase.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Phase {index + 1}: {phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}