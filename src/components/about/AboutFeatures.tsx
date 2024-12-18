import React from 'react';
import { Brain, Music, Palette } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Science-Backed Storytelling",
    description: "Our approach is grounded in research that explores how auditory and visual stimuli affect emotions and behaviors. Every element is designed to enhance brand recall and create stronger connections."
  },
  {
    icon: Music,
    title: "A Multi-Sensory Approach",
    description: "By engaging multiple senses, we ensure that your message resonates deeply and meaningfully. Every note, shade, and rhythm works together to connect with your audience."
  },
  {
    icon: Palette,
    title: "Integrated Expertise",
    description: "Our team of experts in marketing strategy, sound design, and psychology work together to ensure every aspect of your brand is aligned and impactful."
  }
];

export default function AboutFeatures() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-b from-purple-900/50 to-transparent p-8 rounded-2xl backdrop-blur-sm">
              <div className="bg-purple-600/20 p-4 rounded-lg inline-block mb-6">
                <feature.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}