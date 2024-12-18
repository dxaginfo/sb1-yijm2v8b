import React from 'react';
import { Search, Palette, Rocket, ChartBar } from 'lucide-react';

const steps = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Discovery",
    description: "Research audience behaviors, preferences, and sensory triggers. Identify competitor gaps and untapped opportunities."
  },
  {
    icon: Palette,
    phase: "Phase 2",
    title: "Sensory Strategy Design",
    description: "Create a unique sonic identity and develop color palettes aligned with brand's emotional and psychological goals."
  },
  {
    icon: Rocket,
    phase: "Phase 3",
    title: "Execution",
    description: "Integrate sound and color into campaigns, digital content, and experiential marketing efforts."
  },
  {
    icon: ChartBar,
    phase: "Phase 4",
    title: "Performance Optimization",
    description: "Measure impact using neuromarketing analytics and refine elements for maximum engagement."
  }
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent transform translate-y-[-50%] translate-x-[50%]" />
              )}
              <div className="bg-gradient-to-b from-purple-900/50 to-transparent p-8 rounded-2xl backdrop-blur-sm relative z-10">
                <div className="bg-purple-600/20 p-4 rounded-lg inline-block mb-6">
                  <step.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-sm font-semibold text-purple-400 mb-2">{step.phase}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}