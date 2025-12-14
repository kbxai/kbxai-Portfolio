import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/5 text-center">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Kartik Bajaj. Built with React, Tailwind & Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;