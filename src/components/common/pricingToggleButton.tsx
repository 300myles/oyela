// TogglePricing.tsx
import React from "react";

interface TogglePricingProps {
  active: 'monthly' | 'yearly';
  setActive: React.Dispatch<React.SetStateAction<'monthly' | 'yearly'>>;
}

const TogglePricing: React.FC<TogglePricingProps> = ({ active, setActive }) => {
  return (
    <div>
      <button 
        className={`px-4 py-2 ${active === 'monthly' ? 'bg-blue-500' : 'bg-gray-300'}`} 
        onClick={() => setActive('monthly')}
      >
        Monthly
      </button>
      <button 
        className={`px-4 py-2 ${active === 'yearly' ? 'bg-blue-500' : 'bg-gray-300'}`} 
        onClick={() => setActive('yearly')}
      >
        Yearly
      </button>
    </div>
  );
};

export default TogglePricing;
