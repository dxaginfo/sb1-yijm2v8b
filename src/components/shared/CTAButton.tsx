import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  to: string;
  className?: string;
}

export default function CTAButton({ text, to, className = '' }: CTAButtonProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors ${className}`}
    >
      {text}
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}