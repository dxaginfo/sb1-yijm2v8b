import React from 'react';

export default function ContactForm() {
  return (
    <div className="bg-gradient-to-b from-purple-900/50 to-transparent p-8 rounded-2xl backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-6 gradient-text">Get in Touch</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            placeholder="Tell us about your project"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}