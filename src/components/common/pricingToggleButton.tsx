"use client";

import React, { useState } from 'react';

const TogglePricing: React.FC = () => {
  const [active, setActive] = useState<'monthly' | 'yearly'>('monthly'); // Type annotation for active state

  return (
    <div className="relative flex items-center justify-center w-[200px] bg-gray-200 rounded-[20px]">
      {/* Toggle Background */}
      <div
        className={`absolute inset-0 w-1/2 h-full bg-primary rounded-[20px] transition-transform duration-300 ease-in-out ${
          active === 'monthly' ? 'translate-x-0' : 'translate-x-full'
        }`}
      />

      {/* Monthly Button */}
      <button
        className={`relative w-1/2 py-2 text-center text-sm font-medium transition-colors ${
          active === 'monthly' ? 'text-white' : 'text-gray-500'
        }`}
        onClick={() => setActive('monthly')}
      >
        Monthly
      </button>

      {/* Yearly Button */}
      <button
        className={`relative w-1/2 py-2 text-center text-sm font-medium transition-colors ${
          active === 'yearly' ? 'text-white' : 'text-gray-500'
        }`}
        onClick={() => setActive('yearly')}
      >
        Yearly
      </button>
    </div>
  );
};

export default TogglePricing;
