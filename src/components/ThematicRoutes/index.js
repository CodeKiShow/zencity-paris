import React from 'react';
import { MapPin, Star } from 'lucide-react';

const ThematicRoutes = () => {
  const routes = [
    {
      id: 1,
      name: 'Parcours Méditation',
      duration: '3h',
      spots: ['Jardin des Plantes', 'Grande Mosquée', 'Jardin du Luxembourg'],
      difficulty: 'Facile'
    },
    {
      id: 2,
      name: 'Circuit Bien-être',
      duration: '4h',
      spots: ['Spa de la Mosquée', 'Parc Montsouris', 'Restaurant Bio'],
      difficulty: 'Moyen'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Parcours Thématiques</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {routes.map(route => (
          <div key={route.id} className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{route.name}</h2>
            <div className="mb-4">
              <p className="text-gray-600">Durée: {route.duration}</p>
              <p className="text-gray-600">Difficulté: {route.difficulty}</p>
            </div>
            <div className="space-y-2">
              {route.spots.map((spot, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin size={16} className="text-green-500" />
                  <span>{spot}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThematicRoutes;