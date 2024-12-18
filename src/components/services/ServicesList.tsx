import React from 'react';
import { Music, Brain, Palette, Layers, Target } from 'lucide-react';

const services = [
  {
    icon: Music,
    title: "Sonic Branding",
    description: "Create a unique auditory identity that resonates with your audience through custom audio logos, soundscapes, and jingles.",
    features: [
      "Custom audio logos",
      "Tailored soundscapes",
      "Jingle creation"
    ]
  },
  {
    icon: Brain,
    title: "Neuromarketing Strategies",
    description: "Leverage neuroscience research to craft campaigns that maximize engagement and conversion rates.",
    features: [
      "Consumer behavior analysis",
      "Emotion-driven campaigns",
      "Data-driven insights"
    ]
  },
  {
    icon: Palette,
    title: "Color Psychology",
    description: "Choose the perfect color palette that aligns with your message and creates a cohesive multi-sensory experience.",
    features: [
      "Color palette development",
      "Visual identity alignment",
      "Environmental design"
    ]
  },
  {
    icon: Layers,
    title: "Multi-Sensory Campaigns",
    description: "Design comprehensive campaigns that immerse your audience in your brand through integrated sensory experiences.",
    features: [
      "Integrated storytelling",
      "Interactive installations",
      "Cross-platform experiences"
    ]
  },
  {
    icon: Target,
    title: "Brand Audits",
    description: "Assess your current branding efforts and identify opportunities for improvement in sound and visual elements.",
    features: [
      "Comprehensive analysis",
      "Strategic recommendations",
      "Performance metrics"
    ]
  }
];

export default function ServicesList() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-b from-purple-900/50 to-transparent p-8 rounded-2xl backdrop-blur-sm">
              <div className="bg-purple-600/20 p-4 rounded-lg inline-block mb-6">
                <service.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}