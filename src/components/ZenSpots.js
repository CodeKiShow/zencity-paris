import React, { useState } from 'react';
import { MapPin, Star, Heart, Search } from 'lucide-react';

const ZenSpots = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const spots = [
    {
      id: 1,
      name: "Jardin des Plantes",
      type: "park",
      rating: 4.8,
      address: "57 rue Cuvier",
      description: "Un havre de paix au cœur de Paris",
      crowdLevel: "Calme"
    },
    {
      id: 2,
      name: "Grande Mosquée",
      type: "wellness",
      rating: 4.7,
      address: "2bis Place du Puits de l'Ermite",
      description: "Spa traditionnel et salon de thé paisible",
      crowdLevel: "Modéré"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Spots Zen à Paris</h1>
        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher un lieu..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {spots.map(spot => (
          <div key={spot.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">{spot.name}</h2>
                <Heart className="text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <MapPin size={16} />
                <span>{spot.address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Star size={16} className="text-yellow-400" />
                <span>{spot.rating}</span>
              </div>
              <p className="text-gray-600 mb-4">{spot.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{spot.crowdLevel}</span>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZenSpots;