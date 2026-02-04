import React from 'react';
import { ThemeMode } from '../types';
import { BrainCircuit, Layers } from 'lucide-react';

interface ThemeToggleProps {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ mode, setMode }) => {
  const isDS = mode === 'data-science';

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative flex bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-2xl">
        
        {/* Slider Background */}
        <div 
          className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full transition-all duration-500 ease-out shadow-lg ${
            isDS ? 'left-1.5 bg-ds-secondary' : 'left-[calc(50%+3px)] bg-fs-primary'
          }`}
        />

        <button
          onClick={() => setMode('data-science')}
          className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 ${
            isDS ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          <BrainCircuit size={18} />
          <span className="text-sm font-bold hidden md:block">Models & Data</span>
        </button>

        <button
          onClick={() => setMode('full-stack')}
          className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 ${
            !isDS ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Layers size={18} />
          <span className="text-sm font-bold hidden md:block">Building Products</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;