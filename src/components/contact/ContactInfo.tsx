import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Brand?</h1>
        <p className="text-xl text-gray-400">
          Contact us today to start building your sound strategy. We're excited to hear from you 
          and discuss how we can work together to elevate your brand through sound and science.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-purple-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-400">info@getsonica.com</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-purple-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-400">(123) 456-7890</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-purple-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold">Office Hours</h3>
            <p className="text-gray-400">Monday - Friday: 9 AM - 7 PM</p>
            <p className="text-gray-400">Saturday: By Appointment Only</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}