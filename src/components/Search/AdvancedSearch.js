import React, { useState } from 'react';
import { Search, MapPin, Star } from 'lucide-react';

const AdvancedSearch = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    rating: null,
    crowdLevel: 'any',
    priceRange: 'any'
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <select
            className="p-2 border rounded-lg"
            value={filters.type}
            onChange={(e) => setFilters({...filters, type: e.target.value})}
          >
            <option value="all">Tous les types</option>
            <option value="zen">Spots Zen</option>
            <option value="restaurant">Restaurants</option>
          </select>

          <select
            className="p-2 border rounded-lg"
            value={filters.rating || 'any'}
            onChange={(e) => setFilters({...filters, rating: e.target.value})}
          >
            <option value="any">Toutes les notes</option>
            <option value="4">4+ étoiles</option>
            <option value="4.5">4.5+ étoiles</option>
          </select>

          <select
            className="p-2 border rounded-lg"
            value={filters.crowdLevel}
            onChange={(e) => setFilters({...filters, crowdLevel: e.target.value})}
          >
            <option value="any">Toute affluence</option>
            <option value="low">Calme</option>
            <option value="medium">Modéré</option>
          </select>

          <select
            className="p-2 border rounded-lg"
            value={filters.priceRange}
            onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
          >
            <option value="any">Tous les prix</option>
            <option value="low">€</option>
            <option value="medium">€€</option>
            <option value="high">€€€</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;