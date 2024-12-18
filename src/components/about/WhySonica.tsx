import React from 'react';
import { Zap, Brain, Layers, Target } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Bridging Sound and Strategy",
    description: "Every sound and color is purposefully designed to align with strategic goals, creating campaigns that resonate deeply."
  },
  {
    icon: Brain,
    title: "Science-Driven Storytelling",
    description: "Rooted in neuromarketing, every campaign uses data to ensure sound and color influence decision-making and enhance emotional engagement."
  },
  {
    icon: Layers,
    title: "Multi-Sensory Mastery",
    description: "Sonica combines the emotional power of sound, music, and color psychology to create unforgettable brand moments."
  },
  {
    icon: Target,
    title: "Unmatched Brand Recall",
    description: "Sensory triggers tap into memory and emotion, making your brand unforgettable."
  }
];

export default function WhySonica() {
  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Why Sonica?</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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