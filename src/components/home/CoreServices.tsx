import React from 'react';
import { Brain, Music, Palette, Layers } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "Neuro-Marketing",
    features: [
      "Behavioral Insights: Design campaigns based on consumer psychology",
      "Decision-Driven Design: Optimize sound and color for behavior",
      "Memory Strategies: Enhance brand recall through multi-sensory triggers"
    ]
  },
  {
    icon: Music,
    title: "Sonic Branding",
    features: [
      "Audio Logos: Unique sound signatures for instant recognition",
      "Music Curation: Custom soundtracks for brand values",
      "Sonic Environments: Immersive soundscapes for all platforms"
    ]
  },
  {
    icon: Palette,
    title: "Color Psychology",
    features: [
      "Visual Strategy: Colors that evoke targeted emotions",
      "Sensory Integration: Harmonize colors with sound",
      "Brand Recall: Enhance memory through color-sound pairing"
    ]
  },
  {
    icon: Layers,
    title: "Multi-Sensory Campaigns",
    features: [
      "Holistic Design: Integrate sound, music, and color",
      "Neurological Triggers: Activate emotional responses",
      "Cross-Channel Cohesion: Synchronize across touchpoints"
    ]
  }
];

export default function CoreServices() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-b from-purple-900/50 to-transparent p-8 rounded-2xl backdrop-blur-sm">
              <div className="bg-purple-600/20 p-4 rounded-lg inline-block mb-6">
                <service.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}