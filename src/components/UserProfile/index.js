import React, { useState } from 'react';
import { Star, MapPin } from 'lucide-react';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('visits');

  const userStats = {
    visits: 23,
    reviews: 12,
    greenScore: 850,
    favorites: [
      {
        id: 1,
        name: 'Jardin des Plantes',
        type: 'zen',
        lastVisit: '2024-12-20'
      },
      {
        id: 2,
        name: "L'Abeille Zen",
        type: 'restaurant',
        lastVisit: '2024-12-19'
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-2xl text-green-600">JM</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Julie Martin</h2>
            <p className="text-gray-600">Exploratrice zen 🌿</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('visits')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'visits' ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
          >
            Visites
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'favorites' ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
          >
            Favoris
          </button>
        </div>

        {activeTab === 'visits' ? (
          <div className="grid gap-4">
            {userStats.favorites.map(place => (
              <div key={place.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <MapPin className="text-green-500" />
                  <div>
                    <h3 className="font-medium">{place.name}</h3>
                    <p className="text-sm text-gray-600">Visité le {place.lastVisit}</p>
                  </div>
                </div>
                <Star className="text-yellow-400" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4">
            {userStats.favorites.map(place => (
              <div key={place.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <MapPin className="text-green-500" />
                  <div>
                    <h3 className="font-medium">{place.name}</h3>
                    <p className="text-sm text-gray-600">{place.type}</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-600">
                  Retirer des favoris
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;