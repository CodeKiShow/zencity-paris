import React from 'react';
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  return (
    <div className="relative w-full h-[600px] bg-gray-100 rounded-xl overflow-hidden">
      <div className="absolute inset-0">
        <img src="/api/placeholder/1200/600" alt="Map" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default InteractiveMap;