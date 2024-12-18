import React from 'react';
import { Rocket, Brain, Layers } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            What Makes Sonica Different?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sound isn't just something you hear—it's something you feel. It shapes emotions, drives decisions, and makes stories unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-gradient-to-b from-purple-900/50 to-transparent p-8 rounded-2xl backdrop-blur-sm">
            <div className="bg-purple-600/20 p-4 rounded-lg inline-block mb-6">
              <Rocket className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">A Multi-Sensory Approach</h3>
            <p className="text-gray-400">
              Every note, shade, and rhythm works together to connect with your audience on an emotional and cognitive level.
            </p>
          </div>

          <div className="bg-gradient-to-b from-purple-900/50 to-transparent p-8 rounded-2xl backdrop-blur-sm">
            <div className="bg-purple-600/20 p-4 rounded-lg inline-block mb-6">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Science-Backed Storytelling</h3>
            <p className="text-gray-400">
              Behind every campaign is the neuroscience of how people respond to sound and color.
            </p>
          </div>

          <div className="bg-gradient-to-b from-purple-900/50 to-transparent p-8 rounded-2xl backdrop-blur-sm">
            <div className="bg-purple-600/20 p-4 rounded-lg inline-block mb-6">
              <Layers className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Integrated Expertise</h3>
            <p className="text-gray-400">
              A proprietary blend of neuromarketing, sonic branding, and color psychology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}