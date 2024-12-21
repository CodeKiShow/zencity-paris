import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart } from 'lucide-react';

export default function Navigation() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-600">ZenCity</Link>
          <div className="flex gap-6">
            <Link to="/spots" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
              <MapPin size={20} />
              <span>Spots Zen</span>
            </Link>
            <Link to="/favorites" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
              <Heart size={20} />
              <span>Favoris</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}